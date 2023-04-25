"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    static associate(models) {
      this.belongsTo(models.location);
      this.hasMany(models.animalactivity);
    }
  }
  Animals.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      locationId: {
        type: DataTypes.INTEGER,
        references: { model: "locations", key: "id" },
      },
      lifespan: { type: DataTypes.STRING, allowNull: false },
      diet: { type: DataTypes.STRING, allowNull: false },
      habitat: { type: DataTypes.STRING, allowNull: false },
      range: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.JSON,
      iucnStatus: DataTypes.STRING,
      iucnDescription: DataTypes.JSON,
      bannerUrl: DataTypes.STRING,
      iconUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "animal",
    }
  );
  return Animals;
};
