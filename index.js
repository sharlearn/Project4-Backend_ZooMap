require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./db/models/index");
const { location, animal, animalactivity, geojson } = db;

// could we find a way to dynamically import all controllers and/or routers? In node we can read files dynamically!
const BaseController = require("./controllers/baseController");
const BaseRouter = require("./routers/baseRouter");

const AnimalController = require("./controllers/animalController");
const AnimalRouter = require("./routers/animalRouter");

const ActivityController = require("./controllers/activityController");
const ActivityRouter = require("./routers/activityRouter");

const locationController = new BaseController(location);
const animalController = new AnimalController(animal);
const activityController = new ActivityController(
  animalactivity,
  location,
  animal
);
const geoJsonController = new BaseController(geojson);

const locationRouter = new BaseRouter(locationController, express).routes();
const animalRouter = new AnimalRouter(animalController, express).routes();
const activityRouter = new ActivityRouter(activityController, express).routes();
const geoJsonRouter = new BaseRouter(geoJsonController, express).routes();

app.use("/location", locationRouter);
app.use("/animal", animalRouter);
app.use("/activity", activityRouter);
app.use("/geojson", geoJsonRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
