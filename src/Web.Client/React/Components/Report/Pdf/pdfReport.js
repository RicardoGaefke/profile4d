const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${process.argv[2]}/pdf`, {
    waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
  })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('goto: ', err);
    });

  await page.emulateMediaType('print')
    .then(async () => {
      await page.pdf({
        // path: 'hn.pdf',
        format: 'a4',
        margin: {
          top: '1cm',
          bottom: '1.5cm',
        },
      })
        .then(buffer => buffer);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('emulateMedia', err);
    });

  await browser.close();
})();
