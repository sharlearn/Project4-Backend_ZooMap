"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AnimalActivity extends Model {
    static associate(models) {
      this.belongsTo(models.animal);
      this.belongsTo(models.location);
    }
  }
  AnimalActivity.init(
    {
      animalId: {
        type: DataTypes.INTEGER,
        references: { model: "animals", key: "id" },
      },
      name: DataTypes.STRING,
      locationId: {
        types: DataTypes.INTEGER,
        references: { model: "locations", key: "id" },
      },
      dayOfWeek: DataTypes.INTEGER,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      price: DataTypes.STRING,
      remarks: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "animalactivity",
    }
  );
  return AnimalActivity;
};
