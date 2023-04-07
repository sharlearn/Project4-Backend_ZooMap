"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coordinates extends Model {
    static associate(models) {
      this.belongsTo(models.location);
    }
  }
  Coordinates.init(
    {
      locationId: {
        type: DataTypes.INTEGER,
        references: { model: "locations", key: "id" },
      },
      type: DataTypes.STRING,
      coordinates: DataTypes.ARRAY,
    },
    {
      sequelize,
      modelName: "coordinate",
    }
  );
  return Coordinates;
};
