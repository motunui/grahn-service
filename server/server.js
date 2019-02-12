const path = require('path');
const express = require('express');
const apiRoutes = require('./api/routes/api/index');
const morgan = require('morgan');

const app = express();
const PORT = 3014;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log('Listening on Port : ', PORT);
});
