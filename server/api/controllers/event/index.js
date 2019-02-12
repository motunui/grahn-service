let { Event, Location, HighLights } = require('../../../../database/models');
let { Op } = require('sequelize');

module.exports.find = (req, res, next) => {
  let { eventId } = req.params;

  Event.findOne({
    where: { id: eventId },
    include: [Location, HighLights]
  })
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.status(400).send({});
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
