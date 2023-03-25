"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    static associate(models) {
      this.belongsTo(models.location);
    }
  }
  Animals.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      lifespan: { type: DataTypes.STRING, allowNull: false },
      diet: { type: DataTypes.STRING, allowNull: false },
      habitat: { type: DataTypes.STRING, allowNull: false },
      range: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "animal",
    }
  );
  return Animals;
};
