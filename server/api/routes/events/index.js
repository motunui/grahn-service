let express = require('express');
let router = express.Router();
let EventsController = require('../../controllers/events/index');

router.get('/', EventsController.findAll);

router.get('/:from-:to', EventsController.findThrough);

router.get('/:from', EventsController.findFrom);

router.get('/location/:locationId', EventsController.findByLocation);

module.exports = router;
