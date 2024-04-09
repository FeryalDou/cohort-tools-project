const router = require("express").Router();
const mongoose = require("mongoose");
const Student = require("../models/Student.model");
//all the routes are prefixed with /api/students

router.get("/", (req, res) => {
  Student.find({})
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      console.error("error while retreiving students", error);
      res.status(500).send({ error: "failed to retreive students" });
    });
});

router.get("/:studentId", (req, res, next) => {
  // const id = Number(req.params.studentId);
  Student.findById(req.params.studentId)
    .then((oneStudent) => {
      res.json(oneStudent);
    })
    .catch((err) => {
      console.error("error while retreiving students", err);
      res.json({ error: "error on the backend, see console" });
    });
});

module.exports = router;
