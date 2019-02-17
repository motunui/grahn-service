const path = require('path');
const express = require('express');
const apiHandler = require('./api/routes');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const config = require('./config');
const cors = require('cors');

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
app.use(cors());

app.use('/api', apiHandler(config));

// TODO: work on wild card and static 404 below
// WILDCARD ROUTE
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public'));
});

// Route for unknown call
app.use((req, res, next) => {
  // res.sendFile(path.join(__dirname, '../public/index.html'));
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.listen(config.PORT, () => {
  console.log('Listening on Port : ', config.PORT);
});
