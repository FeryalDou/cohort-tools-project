const router = require("express").Router();
const cohorts = require("./../cohorts.json");
const Cohort = require("../models/Student.model");

//all the routes are prefixed with /api/cohorts
// router.get("/", (req, res) => {
//   Cohort.find({})
//     .then((cohorts) => {
//       res.json(cohorts);
//     })
//     .catch((error) => {
//       console.error("error while retreiving cohorts", error);
//       res.status(500).send({ error: "failed to retreive cohort" });
//     });
//});
router.get("/", async (req, res) => {
  try {
    const allCohorts = await Cohort.find({});
    res.json({
      results: allCohorts,
    });
  } catch (error) {
    console.log(error);
    res.send("Error during GET/api/cohorts");
  }
});

router.get("/:cohortId", (req, res, next) => {
  //const id = Number(req.params.cohortId);
  Cohort.findById(req.params.cohortId)
    .then((oneCohort) => {
      res.json(oneCohort);
    })
    .catch((err) => {
      console.error("error while retreiving cohorts", err);
      res.json({ error: "error on the backend, see console" });
    });
});

module.exports = router;
