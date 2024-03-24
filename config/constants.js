const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const TS_FILE = /\.(ts|tsx)$/;
const CSS_FILE = /\.(css)$/;
const SVG_FILE = /\.(svg)$/;

module.exports = {
  ROOT_DIR,
  TS_FILE,
  CSS_FILE,
  SVG_FILE
};
