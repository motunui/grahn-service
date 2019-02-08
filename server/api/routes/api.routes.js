let express = require('express');
let router = express.Router();
let eventsRoutes = require('./events.routes.js');

// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.use('/events', eventsRoutes);

router.get('/', function(req, res) {
  res.send({ api: 'This is the api root route' });
});

module.exports = router;
