module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    Type: DataTypes.TEXT,
    Name: DataTypes.TEXT,
    Description: DataTypes.TEXT,
    ImageUrl: DataTypes.STRING,
    ListPrice: DataTypes.INTEGER
  });

  Event.associate = (models) => {
    Event.belongsTo(models.Location);
    Event.hasMany(models.Highlight);
  };

  return Event;
};
