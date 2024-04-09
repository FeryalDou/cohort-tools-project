const router = require("express").Router();

router.get("./docs", (req, res) => {
  req.sendFile(__dirname + "/views/docs.html");
});

router.use("/api/cohorts", require("./cohorts.routes"));

router.use("/api/students", require("./students.routes"));

module.exports = router;
