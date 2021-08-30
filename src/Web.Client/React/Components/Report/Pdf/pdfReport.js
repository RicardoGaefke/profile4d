const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://localhost:5080/answer/report/3db363b9-b3cb-4a70-98ae-42d41878daa6', {
    waitUntil: 'networkidle2',
  })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();
})();
