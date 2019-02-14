const express = require('express');
const SeedControl = require('../../controllers/_seed');

module.exports = (config) => {
  const router = express.Router();

  router.patch('/populate/db/:boolean', async (req, res) => {
    let { boolean } = req.params;
    let seed;

    if (boolean === 'true') {
      seed = await SeedControl(config.sqlite.db, boolean);
    }

    try {
      await seed.sync();
      let locations = await seed.populate();
      let events = await seed.populate('Event', locations);
      let highlights = await seed.populate('Highlight', events);
      let guarantee = await seed.populate('Guarantee');
    } catch (error) {
      let blah = error;
    }

    res.send({ Express: 'Done' });
  });

  return router;
};
