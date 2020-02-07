'use strict';
module.exports = (sequelize, DataTypes) => {
  class IngredientItem extends sequelize.Sequelize.Model {
    static associate(models) {
      IngredientItem.belongsTo(models.User)
    }
  }
  IngredientItem.init({
    name: DataTypes.STRING,
    energy: DataTypes.INTEGER,
    carbohydrates: DataTypes.STRING,
    protein: DataTypes.STRING,
    fat: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })
  return IngredientItem;
};