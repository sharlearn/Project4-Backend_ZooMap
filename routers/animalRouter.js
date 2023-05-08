const express = require("express");
const router = express.Router();

class AnimalRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  // Why mix functional style into a class-based router? Might as well just make it a functional router :)!
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
