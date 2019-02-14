const express = require('express');
const GuaranteeControl = require('../../controllers/guarantee');

module.exports = (config) => {
  const router = express.Router();

  const guarantee = GuaranteeControl(config.sqlite.db);

  router.get('/', async (req, res) => {
    const result = await guarantee.get();

    if (result) res.send(result);
    else res.status(400).send('ERROR');
  });

  return router;
};
