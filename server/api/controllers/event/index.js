// let { Event, Location, HighLights } = require('../../../../database/models');
const Models = require('../../../models');

let models = null;
let db = null;

// module.exports.find = (req, res, next) => {
//   let { eventId } = req.params;

//   Event.findOne({
//     where: { id: eventId },
//     include: [Location, HighLights]
//   })
//     .then((result) => {
//       if (result) {
//         res.json(result);
//       } else {
//         res.status(400).send({});
//       }
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// };

async function findOne() {
  try {
    const result = await Event.findOne({
      where: { id: eventId },
      include: [Location, HighLights]
    });

    return result;
    // .then((result) => {
    if (result) {
      res.json(result);
    } else {
      res.status(400).send({});
    }
    // })
    // .catch((err) => {
    //   res.status(500).send(err);
    // });
  } catch (error) {
    return error;
  }
}

module.exports = (_db) => {
  models = Models(_db, false);
  db = _db;
  return { findOne };
};
