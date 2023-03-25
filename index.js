require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./db/models/index");
const { location, amenity, animal } = db;

const BaseController = require("./controllers/baseController");

const BaseRouter = require("./routers/baseRouter");

const locationController = new BaseController(location);
const amenityController = new BaseController(amenity);
const animalController = new BaseController(animal);

const locationRouter = new BaseRouter(locationController, express).routes();
const amenityRouter = new BaseRouter(amenityController, express).routes();
const animalRouter = new BaseRouter(animalController, express).routes();

app.use("/location", locationRouter);
app.use("/amenity", amenityRouter);
app.use("/animal", animalRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
