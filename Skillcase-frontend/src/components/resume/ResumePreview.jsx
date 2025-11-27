import React, { useEffect, useState, useRef } from "react";
import { Download, Edit, Loader2 } from "lucide-react";
import api from "../../api/axios.js";
import { toast } from "react-hot-toast";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (typeof dateStr === "string" && dateStr.toLowerCase() === "present")
    return "PRESENT";
  return dateStr;
};

export default function ResumePreview({ data, onEdit }) {
  const parentRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(1123);
  const [isGenerating, setIsGenerating] = useState(false);

  const A4_WIDTH_PX = 794;

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current && contentRef.current) {
        const parentWidth = parentRef.current.offsetWidth;
        const newScale =
          parentWidth < A4_WIDTH_PX ? parentWidth / A4_WIDTH_PX : 1;
        setScale(newScale);

        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(handleResize);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [data]);

  // Helper function to convert image to base64
  const imageToBase64 = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return null;
    }
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);

    try {
      // Get the resume HTML
      const resumeElement = document.getElementById("print-container");
      if (!resumeElement) {
        throw new Error("Resume content not found");
      }

      // Clone and prepare HTML
      const clone = resumeElement.cloneNode(true);
      clone.style.transform = "none";
      clone.style.boxShadow = "none";

      // Convert logo image to base64
      const logoImg = clone.querySelector('img[alt="Skillcase"]');
      if (logoImg) {
        const logoBase64 = await imageToBase64('/mainlogo.png');
        if (logoBase64) {
          logoImg.src = logoBase64;
        }
      }

      // Create full HTML document with Tailwind CDN
      const fullHTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              * { 
                margin: 0; 
                padding: 0; 
                box-sizing: border-box; 
              }
              body { 
                font-family: Arial, sans-serif;
                background: white;
              }
              
              /* A4 Page Setup */
              @page {
                size: A4;
                margin: 0;
              }
              
              /* Prevent page breaks inside elements */
              .page-break-avoid {
                page-break-inside: avoid;
                break-inside: avoid;
              }
              
              /* Force page break before */
              .page-break-before {
                page-break-before: always;
                break-before: page;
              }
              
              /* Ensure content doesn't overflow */
              #print-container {
                width: 210mm;
                background: white;
              }
            </style>
          </head>
          <body>
            ${clone.outerHTML}
          </body>
        </html>
      `;

      // Send to backend using axios
      const response = await api.post(
        "/pdf/generate-resume",
        {
          html: fullHTML,
          fileName: `${data.personalInfo?.firstName || "Resume"}_Resume`,
        },
        {
          responseType: "blob", // Important for PDF download
        }
      );

      // Download the PDF
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.personalInfo?.firstName || "Resume"}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF Generation Error:", error);
      toast.error(
        `Failed to generate PDF: ${
          error.response?.data?.error || error.message
        }`
      );
    } finally {
      setIsGenerating(false);
    }
  };

  if (!data)
    return <p className="text-gray-500 text-center">No data to preview</p>;

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Resume Preview
        </h2>
        <p className="text-gray-600">Review your resume</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </>
          )}
        </button>

        {onEdit && (
          <button
            onClick={onEdit}
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Resume
          </button>
        )}
      </div>

      {/* --- RESPONSIVE SCALER WRAPPER --- */}
      <div className="w-full bg-slate-100 p-2 md:p-8 flex justify-center overflow-hidden border rounded-lg">
        {/* 1. Parent Container (Calculates Width) */}
        <div
          ref={parentRef}
          className="relative transition-all duration-200 ease-linear"
          style={{
            width: "100%",
            maxWidth: "210mm",
            height: `${contentHeight * scale}px`,
          }}
        >
          {/* 2. Scale Container (Applies Zoom) */}
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              width: "210mm",
              height: `${contentHeight}px`,
            }}
          >
            {/* 3. The Resume Content (Fixed Width, Dynamic Height) */}
            <div
              ref={contentRef}
              id="print-container"
              className="bg-white shadow-2xl relative"
              style={{ width: "210mm", minHeight: "297mm" }}
            >
              {contentHeight > 1123 && ( // Only show if content exceeds 1 page (1123px ≈ 297mm)
                <div
                  className="absolute left-0 right-0 pointer-events-none print:hidden"
                  style={{ zIndex: 999 }}
                >
                  {Array.from(
                    { length: Math.ceil(contentHeight / 1123) - 1 },
                    (_, i) => i + 1
                  ).map((page) => (
                    <div
                      key={page}
                      className="relative"
                      style={{ height: 0, top: `${page * 297}mm` }}
                    >
                      <div className="border-t-2 border-dashed border-red-500 opacity-50"></div>
                      <span className="absolute right-4 -top-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded shadow-lg">
                        Page {page} Break
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <EuropassResumeTemplate data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Resume Template Component ---
function EuropassResumeTemplate({ data }) {
  const {
    personalInfo,
    education,
    experience,
    skills,
    languages,
    hobbies,
    motherTongue,
    medicalSkills,
  } = data;

  return (
    <div className="flex min-h-[297mm] bg-white font-sans text-black relative">
      {/* Skillcase Logo */}
      <div className="absolute top-4 right-6 flex items-center space-x-2 z-10">
        <img
          src="/mainlogo.png"
          alt="Skillcase"
          className="h-24 w-auto object-contain pr-6 -mt-6"
        />
      </div>

      {/* Left Sidebar */}
      <div className="w-[30%] bg-[#fafafa] p-8 border-r border-gray-200">
        <div className="text-center mb-8">
          {personalInfo?.profilePhoto && (
            <div className="relative mb-6 mx-auto w-32 h-32">
              <img
                src={personalInfo.profilePhoto}
                alt="Profile"
                className="w-32 h-32 rounded-full border-2 border-gray-300 mx-auto object-cover"
              />
            </div>
          )}
          <h1 className="text-2xl font-bold text-black leading-tight mb-4 break-words">
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>
        </div>

        <div className="space-y-4 mb-8 ml-6">
          {personalInfo?.nationality && (
            <ContactItem label="Nationality" value={personalInfo.nationality} />
          )}
          {personalInfo?.phone && (
            <ContactItem label="Phone number" value={personalInfo.phone} />
          )}
          {personalInfo?.email && (
            <ContactItem label="Email address" value={personalInfo.email} />
          )}
          {personalInfo?.linkedin && (
            <ContactItem label="LinkedIn" value={personalInfo.linkedin} />
          )}
          {personalInfo?.address && (
            <ContactItem label="Address" value={personalInfo.address} />
          )}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-[70%] p-8 pt-16">
        <div className="space-y-2">
          {/* About Me */}
          {personalInfo?.aboutMe && (
            <div className="mb-6">
              <h2 className="text-base font-normal text-black uppercase tracking-wider mb-1">
                ABOUT ME:
              </h2>
              <p className="text-sm text-black leading-relaxed">
                {personalInfo.aboutMe}
              </p>
            </div>
          )}

          {/* Education */}
          {education?.length > 0 && (
            <ResumeSection title="EDUCATION AND TRAINING">
              <div className="space-y-1 relative">
                <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-[#003399]"></div>
                {education.map((edu) => (
                  <TimelineItem key={edu.id} className="page-break-avoid">
                    <div className="font-extrabold text-[#003399] text-xs mb-1">
                      {edu.startYear} – {edu.endYear}
                      {edu.location && (
                        <span className="font-normal"> – {edu.location}</span>
                      )}
                    </div>
                    <div className="font-bold text-black text-sm mb-1">
                      {edu.degree}
                    </div>
                    <div className="text-black text-sm">{edu.institution}</div>
                  </TimelineItem>
                ))}
              </div>
            </ResumeSection>
          )}

          {/* Experience */}
          {experience?.length > 0 && (
            <ResumeSection title="WORK EXPERIENCE" className="!mb-1">
              <div className="space-y-1 relative">
                <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-[#003399]"></div>
                {experience.map((exp) => (
                  <TimelineItem key={exp.id} className="page-break-avoid">
                    <div className="font-extrabold text-[#003399] text-xs mb-1">
                      <span style={{ fontWeight: 800 }}>
                        {formatDate(exp.startDate)} –{" "}
                        {exp.currentJob ? "PRESENT" : formatDate(exp.endDate)}
                      </span>
                      {exp.location && (
                        <span className="font-normal"> – {exp.location}</span>
                      )}
                    </div>
                    <div className="font-bold text-black text-sm mb-1">
                      {exp.position}
                    </div>
                    {exp.company && (
                      <div className="text-black text-sm mb-2">
                        {exp.company}
                      </div>
                    )}

                    {exp.responsibilities?.length > 0 && (
                      <ul className="list-disc ml-12 text-sm space-y-1">
                        {Array.isArray(exp.responsibilities)
                          ? exp.responsibilities.map(
                              (r, i) =>
                                r.trim() && (
                                  <li key={i} className="text-black">
                                    {r.trim()}
                                  </li>
                                )
                            )
                          : exp.responsibilities
                              .split(/[.]+/)
                              .map((resp, idx) =>
                                resp.trim() ? (
                                  <li key={idx} className="text-black">
                                    {resp.trim()}
                                  </li>
                                ) : null
                              )}
                      </ul>
                    )}
                  </TimelineItem>
                ))}
              </div>
            </ResumeSection>
          )}

          {/* Languages */}
          {(motherTongue || languages?.length > 0) && (
            <ResumeSection title="LANGUAGE SKILLS" className="ml-12">
              <div className="text-black text-xs tracking-wide mt-0">
                {motherTongue && (
                  <div className="mb-2 ml-2">
                    <span className="font-bold uppercase">
                      MOTHER TONGUE(S):{" "}
                    </span>
                    <span className="font-medium uppercase">
                      {motherTongue}
                    </span>
                  </div>
                )}
                {languages?.map((lang) => (
                  <div key={lang.id} className="mb-4 ml-2">
                    <div>
                      <span className="font-bold uppercase">
                        OTHER LANGUAGE(S):{" "}
                      </span>
                      <span className="font-medium uppercase">
                        {lang.language}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between w-24">
                        <span className="font-semibold">Reading</span>
                        <span>{lang.reading}</span>
                      </div>
                      <div className="flex justify-between w-24">
                        <span className="font-semibold">Speaking</span>
                        <span>{lang.speaking}</span>
                      </div>
                      <div className="flex justify-between w-24">
                        <span className="font-semibold">Writing</span>
                        <span>{lang.writing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>
          )}

          {/* Digital Skills */}
          {(medicalSkills?.length > 0 ||
            skills?.technical?.length > 0 ||
            skills?.soft?.length > 0) && (
            <ResumeSection title="DIGITAL SKILLS" className="ml-12">
              <div className="text-xs text-black mt-0 ml-2 flex flex-wrap gap-x-6 gap-y-1">
                {medicalSkills?.map((skill, index) => (
                  <span key={`med-${index}`} className="font-medium">
                    {skill}
                  </span>
                ))}
                {skills?.technical?.map((skill, index) => (
                  <span key={`tech-${index}`} className="font-medium">
                    {skill}
                  </span>
                ))}
                {skills?.soft?.map((skill, index) => (
                  <span key={`soft-${index}`} className="font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>
          )}

          {/* Hobbies */}
          {hobbies && (
            <ResumeSection title="HOBBIES AND INTERESTS" className="ml-12">
              <div className="text-xs text-black mt-0 ml-2 flex flex-wrap gap-x-6 gap-y-1">
                {Array.isArray(hobbies)
                  ? hobbies.map((hobby, index) => (
                      <span key={index} className="font-medium">
                        {hobby.trim()}
                      </span>
                    ))
                  : hobbies.split(",").map((hobby, index) => (
                      <span key={index} className="font-medium">
                        {hobby.trim()}
                      </span>
                    ))}
              </div>
            </ResumeSection>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---
function ContactItem({ label, value }) {
  return (
    <div className="text-left mb-2">
      <div className="font-bold text-black text-xs mb-1">{label}:</div>
      <div className="text-xs text-black break-words leading-relaxed">
        {value}
      </div>
    </div>
  );
}

function ResumeSection({ title, children, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className="text-base font-normal text-black uppercase tracking-wider mb-2 ml-2 border-b-0">
        {title}
      </h2>
      {children}
    </div>
  );
}

function TimelineItem({ children, className = "" }) {
  return (
    <div className={`relative pl-8 pb-4 ${className}`}>
      <div className="absolute left-0 top-6 flex items-center justify-center">
        <div className="w-3 h-3 bg-[#003776] rounded-full"></div>
      </div>
      <div className="ml-0.5">{children}</div>
    </div>
  );
}
