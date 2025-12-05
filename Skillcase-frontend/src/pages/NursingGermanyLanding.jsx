import { useState } from "react";
import { X, GraduationCap, Briefcase, Plane, HandHeart } from "lucide-react";

export default function NursingGermanyLanding() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "https://www.skillcase.in";
  };

  const germanyBenefits = [
    {
      title: "10x Your Earning Potential",
      description:
        "Earn Up to 10 Times More Than Your Current Salary as a Healthcare Professional in Germany, along with performance bonuses and additional allowances, allowing you to significantly enhance your financial future.",
      image: "https://skillcase.in/static/img/1.png",
    },
    {
      title: "Settle Abroad with Family",
      description:
        "Germany's family reunification policy allows you to bring your spouse and minor children with you. They can join you in Germany, and in most cases, also have the right to work during their stay.",
      image: "https://skillcase.in/static/img/2.PNG",
    },
    {
      title: "World Class Healthcare",
      description:
        "Germany provides free or heavily subsidized healthcare and education for all residents, ensuring your family's well-being and access to quality learning opportunities.",
      image: "https://skillcase.in/static/img/3.PNG",
    },
    {
      title: "Pathway to Permanent Residency",
      description:
        "As a healthcare professional in Germany, you can typically apply for permanent residency after 3 years of living and working in the country, provided you meet the language and integration requirements.",
      image: "https://skillcase.in/static/img/4.PNG",
    },
  ];

  const benefits = [
    {
      title: "Language Training",
      description:
        "Achieve German B1 level with our expert guidance and structured training program.",
      icon: <GraduationCap className="w-10 h-10 text-[#1976D2]" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Job Assistance",
      description:
        "Get matched with top hospitals in Germany and secure your dream nursing job.",
      icon: <Briefcase className="w-10 h-10 text-[#f59e0b]" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Relocation Support",
      description:
        "Complete assistance for your move to Germany, from visa to settling in.",
      icon: <Plane className="w-10 h-10 text-[#10b981]" />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Complete Support",
      description:
        "End-to-end guidance throughout your entire journey to Germany.",
      icon: <HandHeart className="w-10 h-10 text-[#8b5cf6]" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <section className="py-2 mt-2 relative z-0">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-10 md:leading-none text-[#002856] tracking-tighter">
            Land your <br /> healthcare job in Germany
          </h1>
        </div>
      </section>

      <section className="py-12 relative z-0">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/8Zf0KaDAihw"
              title="Nursing in Germany - Sales Pitch"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-semibold text-gray-700">
                BSc Graduate
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-semibold text-gray-700">
                GNM Graduate
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {germanyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
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

      <section className="py-16 bg-gray-50 relative z-0">
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

      <footer className="bg-gray-900 text-white py-12 relative z-0">
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

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#f59e0b] text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-all shadow-lg cursor-pointer"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
