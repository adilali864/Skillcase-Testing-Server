import { useEffect } from "react";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function NursingGermanyLanding() {
  const navigate = useNavigate();
  const eligibility = [
    "B.Sc / GNM Graduate",
    "German B1 Level (Pass)",
    "Freshers Welcome",
  ];
  const features = [
    {
      icon: <Briefcase className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "High Salary",
      description: "€2,500 - €3,500/month",
      color: "bg-[#1976D2]",
    },
    {
      icon: <Globe className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "Work in Europe",
      description: "Career in Germany",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "German Training",
      description: "Achieve B1 Level",
      color: "bg-[#81D4FA]",
    },
    {
      icon: <Heart className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "Full Support",
      description: "Visa & Placement",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-screen">
      <section id="home" className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Work as a <span className="text-[#1976D2]">Nurse in Germany</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Step into a nursing career abroad with SkillCase. We help you
              achieve German B1 level and secure nursing jobs in Germany.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#1976D2]">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-[#1976D2]">✓</span> Eligibility:
              </h3>
              <ul className="space-y-3">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1976D2] flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => navigate("/Login")}
              className="bg-[#1976D2] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition items-center space-x-2 text-lg font-semibold group inline-flex shadow-lg"
            >
              <span>Apply Now - Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <p className="text-sm text-slate-500">
              Free consultation • No hidden charges
            </p>
          </div>
          <div className="relative w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.color} rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group`}
                >
                  <div className="text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="text-center text-white">
                    <div className="text-lg sm:text-xl font-bold mb-1">
                      {feature.title}
                    </div>
                    <div className="text-xs sm:text-sm opacity-90">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Your Journey to Germany
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Register & Assessment",
                desc: "Sign up and we'll evaluate your profile",
                color: "bg-[#1976D2]",
              },
              {
                step: "2",
                title: "German Language Training",
                desc: "Achieve B1 level with our expert guidance",
                color: "bg-blue-600",
              },
              {
                step: "3",
                title: "Job Placement",
                desc: "Get matched with top hospitals in Germany",
                color: "bg-[#81D4FA]",
              },
              {
                step: "4",
                title: "Visa & Relocation",
                desc: "Complete support for your move to Germany",
                color: "bg-purple-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto max-w-4xl text-center bg-gradient-to-r from-[#1976D2] to-blue-700 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Nursing Career in Germany?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of nurses already working in Germany
          </p>
          <button
            onClick={() => navigate("/Login")}
            className="bg-white text-[#1976D2] hover:bg-slate-100 text-lg font-bold px-10 py-4 rounded-lg shadow-xl transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Apply Now - Limited Seats</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <footer className="w-full px-4 py-8 text-center text-slate-600">
        <p>© 2024 SkillCase. All rights reserved.</p>
      </footer>
    </div>
  );
}
