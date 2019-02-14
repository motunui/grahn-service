module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    Name: DataTypes.STRING
  });

  Location.associate = (models) => {
    Location.hasMany(models.Event);
  };

  return Location;
};
