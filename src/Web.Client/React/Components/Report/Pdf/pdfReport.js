const puppeteer = require('puppeteer');

module.exports = async (callback, url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${url}/pdf`, {
    waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
  })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('goto: ', err);
    });

  const buffer = await page.pdf({
    // path: 'hn.pdf',
    format: 'a4',
    margin: {
      top: '1cm',
      bottom: '1.5cm',
    },
  })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('page.pdf: ', err);
    });

  await browser.close();

  const base64 = buffer.toString('base64');
  return callback(null, base64);
};
