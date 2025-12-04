import { useState } from "react";
import {
  X,
  GraduationCap,
  Briefcase,
  Plane,
  HandHeart,
  TrendingUp,
  Users,
  Heart,
  MapPin,
} from "lucide-react";

export default function NursingGermanyLanding() {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowModal(false);
    setShowThankYou(true);

    setTimeout(() => {
      window.location.href = "https://skillcase.in";
    }, 3000);
  };

  const germanyBenefits = [
    {
      title: "10x Your Earning Potential",
      description:
        "Earn Up to 10 Times More Than Your Current Salary as a Healthcare Professional in Germany",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Settle Abroad with Family",
      description:
        "Germany's family reunification policy allows you to bring your spouse and minor children with you",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "World Class Healthcare",
      description:
        "Germany provides free or heavily subsidized healthcare and education for all residents",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      bgColor: "bg-red-50",
    },
    {
      title: "Pathway to Permanent Residency",
      description:
        "Apply for permanent residency after 3 years of living and working in Germany",
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-purple-50",
    },
  ];

  const benefits = [
    {
      title: "Language Training",
      description:
        "Achieve German B1 level with our expert guidance and structured training program",
      icon: <GraduationCap className="w-12 h-12 text-[#1976D2]" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Job Assistance",
      description:
        "Get matched with top hospitals in Germany and secure your dream nursing job",
      icon: <Briefcase className="w-12 h-12 text-[#f59e0b]" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Relocation Support",
      description:
        "Complete assistance for your move to Germany, from visa to settling in",
      icon: <Plane className="w-12 h-12 text-[#10b981]" />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Complete Support",
      description:
        "End-to-end guidance throughout your entire journey to Germany",
      icon: <HandHeart className="w-12 h-12 text-[#8b5cf6]" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight mb-6">
                Work as a Nurse in Germany
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Discover exciting job openings abroad and get the expert help
                you need to navigate the entire process, from application to
                relocation.
              </p>
            </div>

            {/* Right - Nurse Image */}
            <div className="relative">
              <img
                src="https://skillcase.in/static/img/banner/1.PNG"
                alt="Nursing in Germany"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border-4 border-[#1976D2]">
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl">Sales Pitch Video</p>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#3257bf] mt-8">
            B.Sc / GNM <br /> Freshers Welcome
          </h2>
        </div>
      </section>

      {/* Germany Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-4">
            Why Choose Germany?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Transform your nursing career with unparalleled opportunities in
            Germany
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {germanyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`${benefit.bgColor} w-16 h-16 rounded-xl flex items-center justify-center`}
                  >
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">
            We Provide Everything You Need
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div
                  className={`${benefit.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Video */}
      <footer className="bg-gray-900 text-white py-12">
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

      {/* Sticky Get Started Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#f59e0b] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Get Started
        </button>
      </div>

      {/* Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
              Start Your Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976D2]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976D2]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976D2]"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f59e0b] text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-12 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Our team will reach out to you soon.
            </p>
            <p className="text-sm text-gray-500">Redirecting to SkillCase...</p>
          </div>
        </div>
      )}
    </div>
  );
}
