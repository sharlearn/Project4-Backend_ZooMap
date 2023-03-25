"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Amenities extends Model {
    static associate(models) {
      // define association here
    }
  }
  Amenities.init(
    {
      type: { type: DataTypes.STRING, allowNull: false },
      name: DataTypes.STRING,
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
      modelName: "amenity",
      validate: {
        checkBothCoordinatesEntered() {
          if (this.latitude === null || this.longitude === null) {
            throw new Error("Please enter both latitude and longitude values.");
          }
        },
      },
    }
  );
  return Amenities;
};
