const path = require('path');
const express = require('express');
const apiHandler = require('./api/routes');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize(config.sqlite.options);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

config.sqlite.db = db;

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiHandler(config));

app.listen(config.PORT, () => {
  console.log('Listening on Port : ', config.PORT);
});
