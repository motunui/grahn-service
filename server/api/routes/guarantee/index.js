let express = require('express');
let router = express.Router();
let { Guarantee } = require('../../../../database/models');

router.get('/', (req, res, next) => {
  // TODO: Currently no data in this table
  Guarantee.find({ id: 1 })
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.send('Nope');
      }
    })
    .catch((err) => {
      if (err) {
        res.statusCode(500);
      }
    });
});

module.exports = router;
