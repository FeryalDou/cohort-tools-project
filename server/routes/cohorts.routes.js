const router = require("express").Router();
const Cohort = require("./../models/Cohort.model");

//all the routes are prefixed with /api/cohorts

/**
 * what's in a request?
 * request body:hold some informations
 * request params: a part of the url which can change
 * request query: search params or querystrings
 */

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
    console.log(req.query);
    let skip = 0;
    let limit = 2;

    if (req.query.skip !== undefined) {
      skip = Number(req.query.skip);
    }
    if (req.query.limit !== undefined) {
      limit = Number(req.query.limit);
    }

    const allCohorts = await Cohort.find({}).limit(limit).skip(skip);
    res.json(allCohorts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error during GET/api/cohorts");
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

router.post("/", async (req, res, next) => {
  try {
    console.log("Request Body:", req.body);
    const createdCohort = await Cohort.create(
      req.body
      // inProgress: req.inProgress,
      // cohortSlug: req.cohortSlug,
      // cohortName: req.cohortName,
      // program: req.program,
      // campus: req.campus,
      // startDate: req.startDate,
      // endDate: req.endDate,
      // leadTeacher: req.leadTeacher,
      // totalHours: req.totalHours,
    );
    res.status(201).json(createdCohort);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error on the backend, see console" });
  }
});

module.exports = router;
