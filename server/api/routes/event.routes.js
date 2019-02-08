let express = require('express');
let router = express.Router();
let { Event } = require('../../../database/models.js');

router.get('/', (req, res, next) => {
  res.send({ Event: 'This is the envents root route' });
});

router.get('/:eventId', (req, res) => {
  let { eventId } = req.params;

  Event.findById(eventId)
    .then((result) => {
      if (result) {
        res.json(result);
      }
    })
    .catch((err) => {});
});

router.post('/', (req, res) => {
  let body = req.body;

  // This does not work
  // NOTE: Should this even be here?
  res.send(body);
});

module.exports = router;
