const path = require("path");
const SRC_PATH = path.join(__dirname, '../React');
const STORIES_PATH = path.join(__dirname, '../React');
//dont need stories path if you have your stories inside your //components folder

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(t|j)sx?$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};