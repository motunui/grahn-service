const path = require('path');

const appname = 'TripAdvisor';

module.exports = {
  applicationName: appname,
  env: 'dev',
  sqlite: {
    options: {
      dialect: 'DBMS',
      storage: path.resolve('path')
    }
  }
};
