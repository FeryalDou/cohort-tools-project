const router = require("express").Router();
const mongoose = require("mongoose");
const Student = require("../models/Student.model");
//all the routes are prefixed with /api/students
/**
 * what's in a request?
 * request body:hold some informations
 * request params: a part of the url which can change
 * request query: search params or querystrings
 */

// router.get("/", (req, res) => {
//   Student.find({})
//     .then((students) => {
//       res.json(students);
//     })
//     .catch((error) => {
//       console.error("error while retreiving students", error);
//       res.status(500).send({ error: "failed to retreive students" });
//     });
// });

router.get("/", async (req, res) => {
  try {
    console.log(req.query);
    let skip = 0;
    let limit = 2;

    if (req.query.skip !== undefined) {
      skip = Number(req.query.skip);
    }
    if (req.query.limit !== undefined) {
      limit = Number(req.query.limit);
    }

    const allStudent = await Student.find({}).limit(limit).skip(skip);
    res.json({
      results: allStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error during GET/api/students");
  }
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
