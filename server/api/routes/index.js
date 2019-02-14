const express = require('express');
const eventRoutes = require('./event');
const guaranteeRoutes = require('./guarantee');
const seedRoute = require('./_seed');
// const eventsRoutes = require('./events');
// const locationRoutes = require('./location');
// const locationsRoutes = require('./locations');

module.exports = (config) => {
  const router = express.Router();

  // router.use('/events', eventsRoutes);
  // router.use('/location', locationRoutes);
  // router.use('/locations', locationsRoutes);
  router.use('/event', eventRoutes(config));
  router.use('/guarantee', guaranteeRoutes(config));
  router.use('/seed', seedRoute(config));

  router.get('/', function(req, res) {
    res.send({ api: 'This is the api root route' });
  });

  return router;
};
