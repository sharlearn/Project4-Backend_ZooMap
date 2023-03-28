require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./db/models/index");
const { location, animal, animalactivity } = db;

const BaseController = require("./controllers/baseController");

const BaseRouter = require("./routers/baseRouter");
const ActivityController = require("./controllers/activityController");
const ActivityRouter = require("./routers/activityRouter");

const locationController = new BaseController(location);
const animalController = new BaseController(animal);
const activityController = new ActivityController(
  animalactivity,
  location,
  animal
);

const locationRouter = new BaseRouter(locationController, express).routes();
const animalRouter = new BaseRouter(animalController, express).routes();
const activityRouter = new ActivityRouter(activityController, express).routes();

app.use("/location", locationRouter);
app.use("/animal", animalRouter);
app.use("/activity", activityRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
