let { Event, Location } = require('../../../database/models.js');
let { Op } = require('sequelize');

module.exports.findAll = (req, res, next) => {
  Event.findAndCountAll()
    .then((result) => {
      if (result.count > 0) {
        res.json(result);
      } else {
        res.status(400).send(result);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.findFrom = (req, res, next) => {
  let { to } = req.params;

  Event.findAndCountAll({
    include: [Location],
    offset: to
  })
    .then((result) => {
      if (result.count > 0) {
        res.json(result);
      } else {
        res.status(400).send(result);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.findByLocation = (req, res, next) => {
  let { locationId } = req.params;

  Event.findAndCountAll({
    where: { '$Location.id$': locationId },
    include: [Location]
  })
    .then((result) => {
      if (result.count > 0) {
        res.json(result);
      } else {
        res.status(400).send(result);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.findThrough = (req, res, next) => {
  let { from, to } = req.params;

  if (+from > +to) {
    from = to;
    to = +req.params.from;
  }

  Event.findAndCountAll({
    include: [Location],
    where: {
      id: {
        [Op.between]: [from, to]
      }
    }
  })
    .then((result) => {
      if (result.count > 0) {
        res.json(result);
      } else {
        res.status(400).send(result);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
