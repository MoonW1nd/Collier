const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const defaultOptions = {
  uri: 'http://google.com/',
  transform: body => cheerio.load(body),
};

const scrape = async (options) => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(options.uri);
  const content = await page.content();
  const $ = options.transform(content);
  await page.screenshot({ path: 'screenshot.png' });
  browser.close();
  return $;
};

scrape(defaultOptions);
