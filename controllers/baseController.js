class BaseController {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res) {
    const { attributes } = req.query;

    try {
      if (req.query.attributes) {
        const output = await this.model.findAll({
          attributes: JSON.parse(attributes),
        });
        return res.json(output);
      } else {
        const output = await this.model.findAll();
        return res.json(output);
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOneByPk(req, res) {
    const { id } = req.params;
    const { attributes } = req.query;
    try {
      const output = await this.model.findByPk(id);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;
