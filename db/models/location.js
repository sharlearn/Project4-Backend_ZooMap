"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      this.hasMany(models.animal);
    }
  }
  Location.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      type: { type: DataTypes.STRING, allowNull: false },
      latitude: {
        type: DataTypes.FLOAT,
        validate: {
          min: -90,
          max: 90,
        },
      },
      longitude: {
        type: DataTypes.FLOAT,
        validate: {
          min: -180,
          max: 180,
        },
      },
    },
    {
      sequelize,
      modelName: "location",
      validate: {
        checkBothCoordinatesEntered() {
          if (this.latitude === null || this.longitude === null) {
            throw new Error("Please enter both latitude and longitude values.");
          }
        },
      },
    }
  );
  return Location;
};
