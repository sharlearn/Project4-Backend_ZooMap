"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Geojsons extends Model {
    static associate(models) {}
  }
  Geojsons.init(
    {
      data: { type: DataTypes.JSONB, allowNull: false },
    },
    {
      sequelize,
      modelName: "geojson",
    }
  );
  return Geojsons;
};
