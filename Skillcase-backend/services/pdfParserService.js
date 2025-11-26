const pdf = require("pdf-parse");

const extractTextFromPdf = async (pdfBuffer) => {
  try {
    const result = await pdf(pdfBuffer);
    const text = result.text.trim();

    if (!text || text.length < 50) {
      throw new Error(
        "PDF appears to be empty or contains insufficient information"
      );
    }

    return text;
  } catch (error) {
    console.log("Error in parsing PDF:", error.message);
    throw new Error(`Failed to parse PDF: ${error.message}`);
  }
};

module.exports = { extractTextFromPdf };
