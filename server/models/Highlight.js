module.exports = (sequelize, DataTypes) => {
  const Highlight = sequelize.define('Highlight', {
    Text: DataTypes.STRING
  });

  Highlight.associate = (models) => {
    Highlight.belongsTo(models.Event);
  };

  return Highlight;
};
