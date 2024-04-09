const router = require("express").Router();
const cohorts = require("./../cohorts.json");

//all the routes are prefixed with /api/cohorts

router.get("/", (req, res) => {
  res.json(cohorts);
});

router.get("/:cohortId", (req, res, next) => {
  const id = Number(req.params.cohortId);
  const oneCohort = cohorts.find((element) => element._id === id);
  if (oneCohort) {
    res.json(oneCohort);
  } else {
    res.status(400).json({ message: `${id} not found` });
  }
});
module.exports = router;
