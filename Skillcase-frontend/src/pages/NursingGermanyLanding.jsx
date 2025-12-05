import { useState, useRef, useEffect } from "react";
import {
  X,
  GraduationCap,
  Briefcase,
  Plane,
  HandHeart,
  CheckCircle,
  Loader2,
} from "lucide-react";
export default function NursingGermanyLanding() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const formRef = useRef(null);
  const benefitsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    benefitsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const handleGetStarted = () => {
    setShowModal(true);
    setSubmitSuccess(false);
    setFormData({ name: "", phone: "", qualification: "", experience: "" });
  };
  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };
  const germanyBenefits = [
    {
      title: "10x Your Earning Potential",
      description:
        "Earn Up to 10 Times More Than Your Current Salary as a Healthcare Professional in Germany, along with performance bonuses and additional allowances.",
      image: "https://skillcase.in/static/img/1.png",
    },
    {
      title: "Settle Abroad with Family",
      description:
        "Germany's family reunification policy allows you to bring your spouse and minor children with you. They can join you in Germany.",
      image: "https://skillcase.in/static/img/2.PNG",
    },
    {
      title: "World Class Healthcare",
      description:
        "Germany provides free or heavily subsidized healthcare and education for all residents, ensuring your family's well-being.",
      image: "https://skillcase.in/static/img/3.PNG",
    },
    {
      title: "Pathway to Permanent Residency",
      description:
        "As a healthcare professional in Germany, you can typically apply for permanent residency after 3 years of living and working in the country.",
      image: "https://skillcase.in/static/img/4.PNG",
    },
  ];
  const benefits = [
    {
      title: "Language Training",
      description: "Achieve German B1 level with our expert guidance.",
      icon: <GraduationCap className="w-10 h-10 text-[#1976D2]" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Job Assistance",
      description: "Get matched with top hospitals in Germany.",
      icon: <Briefcase className="w-10 h-10 text-[#f59e0b]" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Relocation Support",
      description: "Complete assistance for your move to Germany.",
      icon: <Plane className="w-10 h-10 text-[#10b981]" />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Complete Support",
      description: "End-to-end guidance throughout your entire journey.",
      icon: <HandHeart className="w-10 h-10 text-[#8b5cf6]" />,
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-amber-100 rounded-full opacity-40 blur-3xl"></div>
      </div>
      <section className="py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#002856]">
              Now Accepting Applications
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#002856] tracking-tight">
            Land Your <br />
            <span className="bg-gradient-to-r from-[#002856] to-[#0066cc] bg-clip-text text-transparent">
              Healthcare Job
            </span>
            <br /> in Germany
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Your gateway to a rewarding nursing career in Europe's leading
            healthcare system
          </p>
        </div>
      </section>
      <section className="py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#002856] via-[#0066cc] to-[#f59e0b] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8Zf0KaDAihw"
                  title="Nursing in Germany - Sales Pitch"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white shadow-lg shadow-green-100 border border-green-100 rounded-full px-5 py-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-base font-semibold text-gray-800">
                BSc Nursing
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white shadow-lg shadow-green-100 border border-green-100 rounded-full px-5 py-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-base font-semibold text-gray-800">
                GNM Graduate
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {germanyBenefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => (benefitsRef.current[index] = el)}
                data-index={index}
                className={`text-center transition-all duration-700 ease-out ${
                  visibleItems[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
              >
                <div className="mb-8 flex items-center justify-center">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-[80%] h-auto rounded-3xl"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#002856] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed w-[80vw] md:w-full mx-auto text-center mb-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002856] mb-12">
            We Provide Everything You Need
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 flex flex-col h-[220px] md:h-[240px]"
              >
                <div
                  className={`${benefit.bgColor} w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 flex-shrink-0`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#002856] mb-2 md:mb-3 flex-shrink-0">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm flex-grow">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Watch Our Introduction
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/X3upxWdcswg"
                title="SkillCase Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>© 2024 SkillCase. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-white via-white to-transparent pt-4">
        <div className="container mx-auto px-4 pb-4">
          <button
            onClick={handleGetStarted}
            className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white py-4 rounded-xl font-bold text-lg hover:from-[#d97706] hover:to-[#b45309] transition-all shadow-lg shadow-amber-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Get Started Now</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitSuccess && (
                <div className="px-6 pt-8 pb-2 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#002856] tracking-tight">
                    Start Your Journey
                  </h2>
                  <p className="text-gray-500 mt-2 text-sm">
                    Register now for your dream career in Germany
                  </p>
                </div>
              )}
              <div className="px-6 pb-6 pt-4">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-9 h-9 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      You're All Set!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our team will reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      className="bg-[#002856] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#003366] transition-all"
                    >
                      Got it, thanks!
                    </button>
                  </div>
                ) : (
                  <>
                    <form
                      ref={formRef}
                      action="https://bigin.zoho.in/crm/WebForm"
                      method="POST"
                      target="bigin_hidden_iframe"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <input
                        type="hidden"
                        name="xnQsjsdp"
                        value="74e3aea6735f32d9fca8b6c0f252bf610156ef46cb0fa0d9cab9dd76d4bde0bf"
                      />
                      <input type="hidden" name="zc_gad" value="" />
                      <input
                        type="hidden"
                        name="xmIwtLD"
                        value="7562cb8f933fd5aec95dd18b95833993c8f0c6805a3a8773bbeed94934efb1b07beaa075910357980dcd9be25bb47966"
                      />
                      <input
                        type="hidden"
                        name="actionType"
                        value="Q29udGFjdHM="
                      />
                      <input type="hidden" name="returnURL" value="null" />

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="Last Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#002856]/20 focus:border-[#002856] focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="Mobile"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#002856]/20 focus:border-[#002856] focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Educational Qualification{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="CONTACTCF6"
                            value={formData.qualification}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                qualification: e.target.value,
                              })
                            }
                            required
                            style={{ backgroundImage: "none" }}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#002856]/20 focus:border-[#002856] focus:bg-white outline-none transition-all text-gray-800 appearance-none cursor-pointer"
                          >
                            <option value="">Select your qualification</option>
                            <option value="GNM Nursing">GNM Nursing</option>
                            <option value="B.Sc Nursing">B.Sc Nursing</option>
                            <option value="ANM/Lab Technician">
                              ANM/Lab Technician
                            </option>
                            <option value="Others">Others</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Work Experience{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="CONTACTCF7"
                            value={formData.experience}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                experience: e.target.value,
                              })
                            }
                            required
                            style={{ backgroundImage: "none" }}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#002856]/20 focus:border-[#002856] focus:bg-white outline-none transition-all text-gray-800 appearance-none cursor-pointer"
                          >
                            <option value="">Select your experience</option>
                            <option value="Less than 1 year">
                              Less than 1 year
                            </option>
                            <option value="1 - 4 years">1 - 4 years</option>
                            <option value="5 - 10 years">5 - 10 years</option>
                            <option value="Above 10 years">
                              Above 10 years
                            </option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white py-3.5 rounded-xl font-bold text-base hover:from-[#d97706] hover:to-[#b45309] transition-all shadow-lg shadow-amber-100 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    </form>
                    <iframe
                      name="bigin_hidden_iframe"
                      style={{ display: "none" }}
                      title="Hidden Form Target"
                    ></iframe>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      🔒 Your information is secure
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
