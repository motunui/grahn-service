let express = require('express');
let router = express.Router();
let eventsRoutes = require('./events/index.js');
let eventRoutes = require('./index.js');
let { Location } = require('../../../../database/models.js');

router.use('/:id/event', eventRoutes);
router.use('/:id/events', eventsRoutes);

router.get('/', (req, res, next) => {
  res.send({ Location: 'This is the location root route' });
});

router.get('/:locId', (req, res) => {
  let params = req.params;
  console.log('LOC: params', params);

  Location.findById(params.locId)
    .then((result) => {
      if (result) {
        res.json(result);
      }
    })
    .catch((err) => {});
});

router.post('/', (req, res) => {
  let body = req.body;

  // This does not work
  // NOTE: Should this even be here?
  res.send(body);
});

module.exports = router;
