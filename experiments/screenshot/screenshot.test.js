import scrape from './screenshot';
import cheerio from 'cheerio';
import fs from 'fs';

describe('Create screnshot from google.com', () => {
  test('should response the cheerio', () => scrape().then($ => expect(typeof $).toEqual(typeof cheerio)));
  test('screenshot will be exist', async () => {
    await scrape();
    const screenshotIsExist = await fs.existsSync('experiments/screenshot/screenshot.png');
    expect(screenshotIsExist).toEqual(true);
  });
});
