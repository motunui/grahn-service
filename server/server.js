let express = require('express');
let app = express();
let path = require('path');
const PORT = 3001;

app.use(express.static(path.join(__dirname, '../src')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Listening on Port : ', PORT);
});
