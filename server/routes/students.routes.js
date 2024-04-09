const router = require("express").Router();
const cohorts = require("../students.json");

//all the routes are prefixed with /api/students

router.get("/", (req, res) => {
  res.json(students);
});

router.get("/:studentId", (req, res, next) => {
  const id = Number(req.params.studentId);
  const oneStudent = students.find((element) => element._id === id);
  if (oneStudent) {
    res.json(oneStudent);
  } else {
    res.status(400).json({ message: `${id} not found` });
  }
});

module.exports = router;
