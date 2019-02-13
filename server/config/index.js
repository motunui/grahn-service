const path = require('path');

const appname = 'TipAdvisor';

module.exports = {
  applicationName: appname,
  PORT: 3014,
  sqlite: {
    options: {
      dialect: 'sqlite',
      storage: path.resolve(__dirname, '../.db/tripAdvisor.db'),
      logging: false
    }
  }
};
