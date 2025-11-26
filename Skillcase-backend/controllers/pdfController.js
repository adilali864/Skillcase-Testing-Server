const axios = require("axios");
exports.generateResumePDF = async (req, res) => {
  try {
    const { html, fileName } = req.body;
    // Validation
    if (!html || typeof html !== "string") {
      return res.status(400).json({ error: "Invalid HTML content" });
    }
    if (html.length > 5 * 1024 * 1024) {
      return res.status(400).json({ error: "HTML content too large" });
    }
    const sanitizedFileName = (fileName || "resume")
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .substring(0, 100);
    // Call HTML2PDF.app API
    const response = await axios.post(
      "https://api.html2pdf.app/v1/generate",
      {
        html: html,
        apiKey: process.env.HTML2PDF_API_KEY,
        options: {
          format: "A4",
          printBackground: true,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      {
        responseType: "arraybuffer",
        timeout: 30000, // 30 seconds
      }
    );
    // Send PDF as download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${sanitizedFileName}.pdf"`
    );
    res.send(response.data);
  } catch (error) {
    console.error("PDF Generation Error:", error.message);
    
    if (error.response?.status === 401) {
      return res.status(500).json({ error: "Invalid API key" });
    }
    if (error.response?.status === 429) {
      return res.status(429).json({ error: "Rate limit exceeded" });
    }
    
    res.status(500).json({ error: "Failed to generate PDF" });
  }
};