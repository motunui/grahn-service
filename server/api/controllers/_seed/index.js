const Models = require('../../../models');
const faker = require('faker');

let lib = {};
let db = null;
let models = null;

let randomThrough = (min, max) => {
  return () => Math.floor(Math.random() * (max - min) + min);
};

lib.Location = (name) => {
  return { Name: faker.address.country() };
};

lib.Event = ({ dataValues }) => {
  return {
    Type: faker.lorem.words(),
    Name: faker.lorem.words(),
    Description: faker.lorem.sentence(),
    ImageUrl: faker.image.imageUrl(),
    ListPrice: faker.finance.amount() * 100,
    LocationId: dataValues.id
  };
};

lib.Event.limit = randomThrough(1, 4);

lib.Highlight = ({ dataValues }) => {
  return {
    Text: faker.lorem.words(),
    EventId: dataValues.id
  };
};

lib.Highlight.limit = randomThrough(3, 6);

lib.Guarantee = (name) => {
  return {
    Body: faker.lorem.paragraphs()
  };
};

let create = (mod, cb, name, limit = 100) => {
  if (name === 'Guarantee') {
    return cb(lib[name](mod));
  }

  for (let i = 1; i <= limit; i += 1) {
    cb(lib[name](mod));
  }
};

let populate = async (name = 'Location', mods) => {
  let arr = [];

  let cb = (model) => {
    arr.push(models[name].create(model));
  };

  if (mods) {
    mods.forEach((mod) => {
      create(mod, cb, name, lib[name].limit());
    });
  } else {
    create(null, cb, name);
  }

  return Promise.all(arr);
};

let sync = () => {
  return models.sync;
};

module.exports = async (_db) => {
  models = Models(_db, true);
  db = _db;
  return { populate, sync };
};
