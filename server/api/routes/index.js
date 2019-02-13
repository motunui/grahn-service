let express = require('express');
let router = express.Router();
let eventsRoutes = require('./events');
let eventRoutes = require('./event');
let locationRoutes = require('./location');
let locationsRoutes = require('./locations');
let guaranteeRoutes = require('./guarantee');

router.use('/events', eventsRoutes);
router.use('/event', eventRoutes);
router.use('/location', locationRoutes);
router.use('/locations', locationsRoutes);
router.use('/guarantee', guaranteeRoutes);

router.get('/', function(req, res) {
  res.send({ api: 'This is the api root route' });
});

module.exports = router;
