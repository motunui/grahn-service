module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Guarantee', {
    Body: DataTypes.TEXT
  });
};
