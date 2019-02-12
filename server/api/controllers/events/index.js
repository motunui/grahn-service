let { Event, Location, HighLights } = require('../../../../database/models');
let { Op } = require('sequelize');

module.exports.findAll = (req, res, next) => {
  Event.findAll({
    include: [Location, HighLights]
  })
    .then((result) => {
      let response = {};

      if (result.length > 0) {
        response.count = result.length;
        response.rows = result;
        res.json(response);
      } else {
        res.status(400).send(response);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.findFrom = (req, res, next) => {
  let { from } = req.params;

  // TODO: Not Working Right
  Event.findAll({
    include: [Location, HighLights],
    offset: +from
  })
    .then((result) => {
      let response = {};

      if (result.length > 0) {
        response.count = result.length;
        response.rows = result;
        res.json(response);
      } else {
        res.status(400).send(response);
      }
    })
    .catch((err) => {
      console.log('TCL: module.exports.findFrom -> err', err);
      res.status(500).send(err);
    });
};

module.exports.findByLocation = (req, res, next) => {
  let { locationId } = req.params;

  Event.findAll({
    where: { '$Location.id$': locationId },
    include: [Location, HighLights]
  })
    .then((result) => {
      let response = {};
      if (result.length > 0) {
        response.count = result.length;
        response.rows = result;
        res.json(response);
      } else {
        res.status(400).send(response);
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

  Event.findAll({
    include: [Location, HighLights],
    where: {
      id: {
        [Op.between]: [from, to]
      }
    }
  })
    .then((result) => {
      let response = {};

      if (result.length > 0) {
        response.count = result.length;
        response.rows = result;
        res.json(response);
      } else {
        res.status(400).send(response);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
