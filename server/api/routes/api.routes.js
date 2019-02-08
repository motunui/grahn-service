let express = require('express');
let router = express.Router();
let eventsRoutes = require('./events.routes.js');
let eventRoutes = require('./event.routes.js');
let locationRoutes = require('./location.routes.js');
let locationsRoutes = require('./locations.routes.js');
let guaranteeRoutes = require('./guarantee.routes.js');

router.use('/events', eventsRoutes);
router.use('/event', eventRoutes);
router.use('/location', locationRoutes);
router.use('/locations', locationsRoutes);
router.use('/guarantee', guaranteeRoutes);

router.get('/', function(req, res) {
  res.send({ api: 'This is the api root route' });
});

module.exports = router;
