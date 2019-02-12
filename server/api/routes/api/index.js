let express = require('express');
let router = express.Router();
let eventsRoutes = require('../events/index');
let eventRoutes = require('../event/index');
let locationRoutes = require('../location/index');
let locationsRoutes = require('../locations/index');
let guaranteeRoutes = require('../guarantee/index');

router.use('/events', eventsRoutes);
router.use('/event', eventRoutes);
router.use('/location', locationRoutes);
router.use('/locations', locationsRoutes);
router.use('/guarantee', guaranteeRoutes);

router.get('/', function(req, res) {
  res.send({ api: 'This is the api root route' });
});

module.exports = router;
