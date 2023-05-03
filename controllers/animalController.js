const BaseController = require("./baseController");

class AnimalController extends BaseController {
  constructor(model, locationModel) {
    super(model);
    this.locationModel = locationModel;
  }

  async getByLocationId(req, res) {
    const { locationid } = req.params;
    console.log(locationid);
    try {
      const output = await this.model.findAll({
        where: {
          locationId: locationid,
        },
      });

      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = AnimalController;
