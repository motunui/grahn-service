const Sequelize = require('sequelize');
const db = require('./index.js');

const Location = db.define('locations', {
  name: Sequelize.STRING
});

const Event = db.define('events', {
  type: Sequelize.TEXT,
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
  listPrice: Sequelize.INTEGER
});

const HighLights = db.define('highlights', {
  text: Sequelize.STRING
});

const Guarantee = db.define('guarantee', {
  body: Sequelize.TEXT
});

Location.hasOne(Event);
Event.hasOne(HighLights);

module.exports = {
  Location: Location,
  HighLights: HighLights,
  Guarantee: Guarantee,
  Event: Event
};
