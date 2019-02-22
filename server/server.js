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

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.use(express.static(path.join(__dirname, '../build')));

server.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

server.use('/api', apiHandler(config));

// app.use('/:id', () => {
//   console.log('In ID');
//   express.static(path.join(__dirname, '../build'));
// });

server.listen(config.PORT, () => {
  console.log(`Listening on Port : ${config.PORT}`);
});

// WILDCARD ROUTE
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
  //   res.sendfile(path.join(__dirname, '../build/index.html'));
});
