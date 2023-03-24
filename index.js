require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./db/models/index");
const { location } = db;

const LocationController = require("./controllers/baseController");

const LocationRouter = require("./routers/locationRouter");

const locationController = new LocationController(location);

const locationRouter = new LocationRouter(locationController, express).routes();

app.use("/location", locationRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
