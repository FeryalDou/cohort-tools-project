const router = require("express").Router();
const cohorts = require("./../cohorts.json");

router.get("./docs", (req, res) => {
  res.json(cohorts);
});

module.exports = router;
