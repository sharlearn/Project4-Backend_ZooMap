const express = require("express");
const router = express.Router();

class ActivityRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/:id",
      this.controller.getByAnimalOrDayId.bind(this.controller)
    );
    router.get(
      "/location/:locationId",
      this.controller.getCurrentDayActivities.bind(this.controller)
    );
    return router;
  };
}

module.exports = ActivityRouter;
