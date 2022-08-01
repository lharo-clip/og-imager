const puppeteer = require("puppeteer");

async function generateImage({ content }) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(content, { waitUntil: "load" });

    const element = await page.$("body");
    const image = await element.screenshot({
      type: 'jpeg',
      quality: 80,
  });
    await browser.close();

    return image;
  } catch(e) {
    console.log(e);
    return null;
  }
};

module.exports = generateImage;
