const puppeteer = require('puppeteer');

module.exports = async (callback, url) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: (process.platform === 'win32') ? null : '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
  })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('lauch: ', err);
    });

  const page = await browser.newPage()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('page: ', err);
    });

  await page.goto(`${url}/pdf`, {
    waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
    timeout: 0,
  })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('goto: ', err);
    });

  await page.$eval('body', (element) => {
    const eventChange = new Event('change');
    const eventPrint = new Event('beforeprint');
    element.dispatchEvent(eventChange);
    element.dispatchEvent(eventPrint);
  });

  await page.$eval('#printingReport', (element) => {
    const eventChange = new Event('change');
    const eventPrint = new Event('beforeprint');
    element.dispatchEvent(eventChange);
    element.dispatchEvent(eventPrint);
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

  await browser.close()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('close: ', err);
    });

  const base64 = buffer.toString('base64');
  return callback(null, base64);
};
