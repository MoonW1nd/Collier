import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

const defaultOptions = {
  uri: 'http://google.com/',
  transform: body => cheerio.load(body),
  headless: true,
  path: 'experiments/screenshot/screenshot.png',
};

const scrape = async (options) => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(options.uri);
  const content = await page.content();
  const $ = options.transform(content);
  await page.screenshot({ path: options.path });
  browser.close();
  return $;
};

export default options => scrape({ ...defaultOptions, ...options });
