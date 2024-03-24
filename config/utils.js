const {ROOT_DIR} = require('./constants');

function resolver(path) {
  return ROOT_DIR + '/' + path;
}

module.exports = {
  resolver
};
