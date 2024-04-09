const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 5005;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/cohorts-tools-api")
  .then((x) =>
    console
      .log(`Connected to Database: "${x.connections[0].name}"`)
      .catch((err) => console.error("Error connecting to MongoDB", err))
  );

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...

const students = require("./students.json");
const cohorts = require("./cohorts.json");

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();
const cors = require("cors");

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origins: ["htpp://localhost:5173", "htpp://localhost:5174"],
  })
);

// ROUTES - https://expressjs.com/en/starter/basic-routing.html

app.use("/", require("./routes/index.routes"));
// Devs Team - Start working on the routes here:

// ...
app.get("/docs", (req, res, next) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/cohorts", (req, res, next) => {
  res.json(cohorts);
});

app.get("/api/students", (req, res, next) => {
  res.json(students);
});

app.get("/api/cohorts/:cohortId", (req, res, next) => {
  const id = Number(req.params.cohortId);
  const oneCohort = cohorts.find((element) => element._id === id);
  if (oneCohort) {
    res.json(oneCohort);
  } else {
    res.status(400).json({ message: `${id} not found` });
  }
});
app.get("/api/students/:studentId", (req, res, next) => {
  const id = Number(req.params.studentId);
  const oneStudent = students.find((element) => element._id === id);
  if (oneStudent) {
    res.json(oneStudent);
  } else {
    res.status(400).json({ message: `${id} not found` });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
