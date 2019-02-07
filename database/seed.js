const db = require('./index.js');
const inject = require('./inject.js');

db.sync({ force: true })
  .then((a) => {
    return inject(100);
  })
  .then((a) => console.log(a))
  .catch((e) => console.log(e));
