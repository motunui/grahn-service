const express = require('express');
const eventsRoutes = require('./events');
const eventRoutes = require('./event');
const locationRoutes = require('./location');
const locationsRoutes = require('./locations');
const guaranteeRoutes = require('./guarantee');

module.exports = (config) => {
  const router = express.Router();

  router.use('/events', eventsRoutes);
  router.use('/event', eventRoutes);
  router.use('/location', locationRoutes);
  router.use('/locations', locationsRoutes);
  router.use('/guarantee', guaranteeRoutes);

  router.get('/', function(req, res) {
    res.send({ api: 'This is the api root route' });
  });

  return router;
};
