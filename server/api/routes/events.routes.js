let express = require('express');
let router = express.Router();
let EventsController = require('../controllers/events.controller.js');
let then = require('../controllers/then.js');

router.get('/', EventsController.findAll);

router.get('/:from-:to', EventsController.findThrough);

router.get('/:to', EventsController.findFrom);

router.get('/location/:locationId', EventsController.findByLocation);

module.exports = router;
