let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ Events: 'This is the envents root route' });
});

router.get('/:id', (req, res) => {
  let parm = req.params;
  res.send(parm);
});

module.exports = router;
