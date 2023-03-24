"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
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
