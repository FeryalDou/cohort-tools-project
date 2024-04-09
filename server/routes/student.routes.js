const router = require("express").Router();
const cohorts = require("./../students.json");

router.get("./docs", (req, res) => {
  res.json(students);
});

module.exports = router;
