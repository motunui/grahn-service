let express = require('express');
let router = express.Router();
let EventController = require('../controllers/event.controller.js');

router.get('/', (req, res, next) => {
  res.send({ Event: 'This is the envents root route' });
});

router.get('/:eventId', EventController.find);

router.post('/', (req, res) => {
  let body = req.body;

  // This does not work
  // TODO: NOTE: Should this even be here?
  res.send(body);
});

module.exports = router;
