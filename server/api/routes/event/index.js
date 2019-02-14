const express = require('express');
const EventControl = require('../../controllers/event');

module.exports = (config) => {
  const router = express.Router();
  const events = EventControl(config.sqlite.db);

  router.get('/', (req, res, next) => {
    res.send({ Event: 'This is the event root route' });
  });

  router.get('/:eventId', async (req, res) => {
    let { eventId } = req.params;

    let result = await events.findOne(eventId);

    if (result) res.send(result);
    else res.status(500).send('ERROR');
  });

  return router;
};
