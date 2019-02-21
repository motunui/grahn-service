const path = require('path');

const appname = 'TripAdvisor';

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
