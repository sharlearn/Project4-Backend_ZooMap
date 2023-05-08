class BaseController {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res) {
    const { attributes } = req.query;

    try {
        const output = await this.model.findAll({
          ...(attributes && { attributes: JSON.parse(attributes)}), //optional object property like so
          // attributes: JSON.parse(attributes),
        });
        return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOneByPk(req, res) {
    // unused variable here
    const { id } = req.params;
    try {
      const output = await this.model.findByPk(id);
      // what if the record does not exist? Do you handle that on the Frontend? I don't recall seeing that.
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;
