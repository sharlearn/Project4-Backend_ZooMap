"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      this.hasMany(models.animal);
      this.hasMany(models.animalactivity);
    }
  }
  Location.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      type: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return Location;
};
