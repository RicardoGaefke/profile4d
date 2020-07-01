const { ncp } = require('ncp');

// eslint-disable-next-line no-console
console.info(`
====================
Copying static files
====================`);

ncp('node_modules/suneditor/dist/css/suneditor.min.css', './wwwroot/suneditor.min.css', (
  err,
) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.error(err);
  }
  // eslint-disable-next-line no-console
  return console.info('suneditor.min.css ✓');
});
