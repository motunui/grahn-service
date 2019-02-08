let express = require('express');
let router = express.Router();
let { Event } = require('../../../database/models.js');

router.get('/', (req, res, next) => {
  res.send({ Event: 'This is the envents root route' });
});

router.get('/:id', (req, res) => {
  let params = req.params;

  Event.findById(params.id)
    .then((result) => {
      if (result) {
        res.json(result);
      }
    })
    .catch((err) => {});
});

router.post('/', (req, res) => {
  let body = req.body;
  res.send(body);
});

module.exports = router;
