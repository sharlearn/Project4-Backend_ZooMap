const BaseController = require("./baseController");

class AnimalController extends BaseController {
  constructor(model, locationModel) {
    super(model);
    this.locationModel = locationModel;
  }

  async getAll(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOneByPk(req, res) {
    console.log(req.params);
    const { id } = req.params;
    try {
      const output = await this.model.findByPk(id);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = AnimalController;
