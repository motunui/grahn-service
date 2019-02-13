const express = require('express');
const EventControl = require('../../controllers/event');

module.exports = (config) => {
  const router = express.Router();
  const models = EventControl(config);

  // router.get('/', (req, res, next) => {
  //   res.send({ Event: 'This is the event root route' });
  // });

  // router.get('/', EventController.find);

  router.get('/:eventId', async (req, res) => {
    let result = models.findOne();
    if (result) res.send(result);
    res.status(500).send('ERROR');
  });

  return router;
};
