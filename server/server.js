const path = require('path');
const express = require('express');
const Routes = require('./api/routes/index');
const morgan = require('morgan');

const app = express();
const PORT = 3014;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Routes);

app.listen(PORT, () => {
  console.log('Listening on Port : ', PORT);
});
