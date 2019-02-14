const ModelsRoot = require('../../../models');

let Models = null;
let db = null;

async function get() {
  try {
    return await Models.Guarantee.find({
      where: { id: 1 }
    });
  } catch (error) {
    return error;
  }
}

module.exports = (_db) => {
  Models = ModelsRoot(_db, false);
  db = _db;
  return { get };
};
