const Sequelize = require('sequelize');
const db = new Sequelize('sqlite:./database/description.db');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully. What');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
