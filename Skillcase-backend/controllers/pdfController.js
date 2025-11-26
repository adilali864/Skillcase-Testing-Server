const puppeteer = require("puppeteer");

exports.generateResumePDF = async (req, res) => {
  let browser;
  try {
    const { html, fileName } = req.body;

    if (!html || typeof html !== "string") {
      return res.status(400).json({ error: "Invalid HTML content" });
    }
    if (html.length > 5 * 1024 * 1024) {
      return res.status(400).json({ error: "HTML content too large" });
    }
    const sanitizedFileName = (fileName || "resume")
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .substring(0, 100);

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set viewport to A4 size
    await page.setViewport({ width: 794, height: 1123 });

    // Set the HTML content
    await page.setContent(html, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await browser.close();

    // Send PDF as download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${sanitizedFileName || "resume"}.pdf"`
    );
    res.send(pdf);
  } catch (error) {
    console.log("PDF Generation Error:", error);
    res.status(500).json({ error: "Failed to generate PDF" });
  }finally{
    if(browser){
      await browser.close();
    }
  }
};
