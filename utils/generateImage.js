const puppeteer = require("puppeteer");

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 315;

async function generateImage({ content }) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
      defaultViewport: {
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
      }
    });
    const page = await browser.newPage();
    await page.setContent(content, { waitUntil: "load" });

    const element = await page.$("body");
    const image = await element.screenshot({
      type: 'jpeg',
  });
    await browser.close();

    return image;
  } catch(e) {
    console.log(e);
    return null;
  }
};

module.exports = generateImage;
