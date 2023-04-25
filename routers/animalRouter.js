const express = require("express");
const router = express.Router();

class AnimalRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes = () => {
    let router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:id", this.controller.getOneByPk.bind(this.controller));
    router.get(
      "/location/:locationid",
      this.controller.getByLocationId.bind(this.controller)
    );
    return router;
  };
}

module.exports = AnimalRouter;
