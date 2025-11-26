const { getGeminiClient, geminiConfig } = require("../config/gemini");

const extractResumeData = async (resumeText) => {
  const genAI = getGeminiClient();
  if (!genAI) {
    throw new Error("Gemini not initialized");
  }

  const prompt = `
  You are a resume data extraction expert. Extract ALL information from the provided resume text and return it in the exact JSON format specified below.
  CRITICAL INSTRUCTIONS:
  1. Extract ALL available information - do not leave fields empty if data exists
  2. For personal info: extract name, phone, email, address, LinkedIn, GitHub, portfolio links
  3. For education: extract ALL degrees, universities, years, GPAs, locations
  4. For experience: extract ALL jobs, positions, companies, dates, locations, and detailed responsibilities
  5. For skills: categorize into technical and soft skills
  6. For languages: extract language proficiency levels (use CEFR levels: A1, A2, B1, B2, C1, C2)
  7. Return ONLY valid JSON, no markdown formatting or additional text
  JSON Structure to fill:
  {
    "personalInfo": {
      "firstName": "",
      "lastName": "",
      "nationality": "",
      "phone": "",
      "email": "",
      "linkedin": "",
      "address": "",
      "aboutMe": "",
      "profilePhoto": ""
    },
    "education": [
      {
        "id": "edu-1",
        "startYear": "",
        "endYear": "",
        "location": "",
        "degree": "",
        "institution": ""
      }
    ],
    "experience": [
      {
        "id": "exp-1",
        "startDate": "MM/YYYY",
        "endDate": "MM/YYYY or Present",
        "location": "",
        "position": "",
        "company": "",
        "responsibilities": [],
        "currentJob": false
      }
    ],
    "motherTongue": "",
    "languages": [
      {
        "id": "lang-1",
        "language": "",
        "reading": "B2",
        "speaking": "B2",
        "writing": "B2"
      }
    ],
    "skills": {
      "technical": [],
      "soft": []
    },
    "hobbies": ""
  }
  Resume content to extract from:
  ${resumeText}
  Extract ALL information and return ONLY the JSON object:
  `;

  try {
    const result = await genAI.models.generateContent({
      model: geminiConfig.model,
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: geminiConfig.generationConfig,
    });

    let extractedText;
    if (result.candidates && result.candidates[0]) {
      extractedText = result.candidates[0].content.parts[0].text;
    } else {
      console.log("Unexpected Gemini response structure");
      throw new Error("Unable to extract text from Gemini response");
    }

    let resumeData = parseGeminiResponse(extractedText);
    resumeData = validateResumeData(resumeData);

    return resumeData;
  } catch (error) {
    console.log("Error in extracting resume data:", error.message);
    throw new Error("Failed to extract data from resume: " + error.message);
  }
};

const parseGeminiResponse = (text) => {
  try {
    let jsonText = text.trim();

    //removes markdown blocks if any
    jsonText = jsonText.replace(/```json\s*/g, "").replace(/```\s*$/g, "");

    //matches the JSON object in response
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }
    return JSON.parse(jsonText);
  } catch (error) {
    console.log("Error in parsing gemini response: ", error.message);
    throw new Error("Failed to parse response: ", error.message);
  }
};

const validateResumeData = (data) => {
  return {
    personalInfo: {
      firstName: data.personalInfo?.firstName || "",
      lastName: data.personalInfo?.lastName || "",
      nationality: data.personalInfo?.nationality || "",
      phone: data.personalInfo?.phone || "",
      email: data.personalInfo?.email || "",
      linkedin: data.personalInfo?.linkedin || "",
      address: data.personalInfo?.address || "",
      aboutMe: data.personalInfo?.aboutMe || "",
      profilePhoto: data.personalInfo?.profilePhoto || "",
    },
    education: Array.isArray(data.education)
      ? data.education.map((edu, index) => ({
          id: edu.id || `edu-${index + 1}`,
          startYear: edu.startYear || "",
          endYear: edu.endYear || "",
          location: edu.location || "",
          degree: edu.degree || "",
          institution: edu.institution || "",
        }))
      : [],
    experience: Array.isArray(data.experience)
      ? data.experience.map((exp, index) => ({
          id: exp.id || `exp-${index + 1}`,
          startDate: exp.startDate || "",
          endDate: exp.endDate || "",
          location: exp.location || "",
          position: exp.position || "",
          company: exp.company || "",
          responsibilities: Array.isArray(exp.responsibilities)
            ? exp.responsibilities
            : [],
          currentJob: exp.currentJob || false,
        }))
      : [],
    motherTongue: data.motherTongue || "",
    languages: Array.isArray(data.languages)
      ? data.languages.map((lang, index) => ({
          id: lang.id || `lang-${index + 1}`,
          language: lang.language || "",
          reading: lang.reading || "B2",
          speaking: lang.speaking || "B2",
          writing: lang.writing || "B2",
        }))
      : [],
    skills: {
      technical: Array.isArray(data.skills?.technical)
        ? data.skills.technical
        : [],
      soft: Array.isArray(data.skills?.soft) ? data.skills.soft : [],
    },
    hobbies: data.hobbies || "",
  };
};

module.exports = { extractResumeData };
