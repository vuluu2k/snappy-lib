const path = require('path');

module.exports = async ({ config }) => {
  config.resolve = {
    alias: {
      snappy: path.resolve(__dirname, '../src/')
    },
  };

  return config;
};
