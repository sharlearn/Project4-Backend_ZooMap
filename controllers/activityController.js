const BaseController = require("./baseController");

class ActivityController extends BaseController {
  constructor(model, locationModel, animalModel) {
    super(model);
    this.locationModel = locationModel;
    this.animalModel = animalModel;
  }

  //find activity by animalId or dayOfWeek or locationId
  //example get requests: http://<hostaddress>/activity/<id>?searchKey=<dayOfWeek | animalId | locationId>
  async getByAnimalOrDayId(req, res) {
    // how can a dayOfWeek have the id as value? I am a bit confused about this design decision.
    // This seems to me like it should be 2 query params, searchKey and searchValue instead of using the id param
    const { id } = req.params;
    const { searchKey } = req.query;

    try {
      const output = await this.model.findAll({
        where: {
          [searchKey]: id,
        },
        include: {
          // why include the location, if the searchKey could be locationId itself? This seems a bit odd to me. 
          // how would the location be associated to a day of a week? ?_?
          model: this.locationModel,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get activities of current day based on locationId
  async getCurrentDayActivities(req, res) {
    const { locationId } = req.params;

    const dayOfWeek = new Date().getDay();

    try {
      const output = await this.model.findAll({
        where: {
          locationId: locationId,
          dayOfWeek: dayOfWeek,
        },
        include: {
          model: this.locationModel,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ActivityController;
