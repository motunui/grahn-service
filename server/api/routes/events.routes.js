let express = require('express');
let router = express.Router();
let { Event } = require('../../../database/models.js');

router.get('/', (req, res, next) => {
  // NOTE: Should this call get all entries of the database?
  Event.findOne()
    .then((result) => {
      if (result) {
        res.send(result);
      }
    })
    .catch((err) => {
      res.statusCode(500);
    });
});

router.get('/:from-:to', (req, res, next) => {
  let { from, to } = req.params;

  // still not working
  res.send({ from, to });
});

router.post('/:from-:to', (req, res) => {
  let body = req.body;
  let { from, to } = req.params;

  // still not working
  res.send({ to, from, body });
});

router.put('/:from-:to', (req, res) => {
  let body = req.body;
  let { from, to } = req.params;

  // still not working
  res.send({ to, from, body });
});

module.exports = router;
