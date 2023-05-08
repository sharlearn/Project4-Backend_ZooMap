const BaseController = require("./baseController");

class AnimalController extends BaseController {
  constructor(model, locationModel) {
    super(model);
    this.locationModel = locationModel;
  }

  async getByLocationId(req, res) {
    // we should validate the id here, to make sure it is the required data type or exists at least.
    const { locationid } = req.params;
    console.log(locationid); // aha! first console.log that didn't get removed! :D
    try {
      const output = await this.model.findAll({
        where: {
          locationId: locationid,
        },
      });
      // what if there is no location with that id?
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = AnimalController;
