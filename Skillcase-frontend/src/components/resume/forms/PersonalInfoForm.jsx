export default function PersonalInfoForm({ data, onUpdate }) {
  const personalInfo = data?.personalInfo || {};

  const handleChange = (field, value) => {
    onUpdate("personalInfo", { ...personalInfo, [field]: value });
  };
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={personalInfo.firstName || ""}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={personalInfo.lastName || ""}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={personalInfo.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={personalInfo.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1234567890"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            LinkedIn
          </label>
          <input
            type="url"
            value={personalInfo.linkedin || ""}
            onChange={(e) => handleChange("linkedin", e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Address
          </label>
          <input
            type="text"
            value={personalInfo.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="City, Country"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            About Me
          </label>
          <textarea
            value={personalInfo.aboutMe || ""}
            onChange={(e) => handleChange("aboutMe", e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Brief introduction about yourself..."
          />
        </div>
      </div>
    </div>
  );
}
