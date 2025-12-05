import { useState, useRef, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
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
  const eligibilityBadges = [
    "GNM/B.Sc Nursing",
    "Age below 35 Years",
    "Training Available",
    "Freshers Welcome",
  ];
  const testimonialVideos = [
    "https://www.youtube.com/embed/h0aua9IBmxE",
    "https://www.youtube.com/embed/2cj-V23xxII",
    "https://www.youtube.com/embed/h0aua9IBmxE",
  ];
  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center">
              <img
                src="/mainlogo.png"
                alt="SkillCase"
                className="w-30 sm:w-30 md:w-30 lg:w-40 h-auto pt-1"
              />
            </a>
          </div>
        </div>
      </nav>

      <div
        className="min-h-screen bg-white relative overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <section className="py-8 md:py-12 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#002856]">
              Land your Nursing
              <br />
              jobs in Germany
            </h1>
            <p className="mt-4 text-[#002856] text-base max-w-md mx-auto">
              Your journey from India to a trusted German healthcare career
              starts here.
            </p>
          </div>
        </section>
        <section className="py-4 md:py-8 relative z-10">
          <div className="container mx-auto px-4 max-w-lg">
            <div className="rounded-lg overflow-hidden shadow-lg border p-1">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/8Zf0KaDAihw"
                  title="Introduction to Skillcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {eligibilityBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-sm font-medium text-gray-700">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#74d5ff]/20 rounded-xl py-4 px-6 text-center">
              <p className="text-lg md:text-xl font-semibold text-[#002856]">
                Upto 40 Lakh Yearly Salary!
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
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
                  <div className="mb-6 flex items-center justify-center">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-[75%] h-auto rounded-2xl"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#002856] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-50 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#002856] mb-8">
              Student Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonialVideos.map((video, index) => (
                <div
                  key={index}
                  className="aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-gray-900"
                >
                  <iframe
                    className="w-full h-full"
                    src={video}
                    title={`Student Testimonial ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4 max-w-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#002856] mb-8">
              Explore Skillcase Learning App
            </h2>
            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg border p-1">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/7P7-tWh0VKA?si=EFTxQELhBknG3qCx"
                title="Skillcase Learning App"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-b from-white to-gray-50 relative z-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#002856] mb-8">
              We provide everything <br /> you need
            </h1>
            <img
              src="/skillcase-support.jpg"
              alt="Skillcase Support"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>

        <footer className="bg-[#153A71] text-white py-12 pb-24 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
              Watch Our Introduction
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
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

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-3 text-base">
                <p>Phone: +91 97314 62667</p>
                <p>Email: info@skillcase.in</p>
                <p>Hours: Mon - Sat | 10:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-blue-800 text-gray-300">
              <p>© 2025 SkillCase. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4">
          <button
            onClick={handleGetStarted}
            className="w-full max-w-md mx-auto block bg-[#F9C53D] text-[#002856] py-4 rounded-xl font-semibold text-lg hover:bg-[#003366] transition-all shadow-lg"
          >
            Get Started
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="relative w-full max-w-md">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                {!submitSuccess && (
                  <div className="px-6 pt-8 pb-2 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#002856]">
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        You're All Set!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Our team will reach out within 24 hours.
                      </p>
                      <button
                        onClick={() => setShowModal(false)}
                        className="bg-[#002856] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003366] transition-all"
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
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
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
                              <option value="">
                                Select your qualification
                              </option>
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
                          className="w-full mt-2 bg-[#002856] text-white py-3.5 rounded-full font-semibold text-base hover:bg-[#003366] transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
    </>
  );
}
