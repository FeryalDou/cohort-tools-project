const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

// describe structure of the document
const cohortSchema = new Schema({
  inProgress: Boolean,
  cohortSlug: String,
  cohortName: String,
  program: String,
  campus: String,
  startDate: Date,
  endDate: Date,
  programManager: String,
  leadTeacher: String,
  totalHours: Number,
});

// create the model
const Cohort = mongoose.model("Cohort", cohortSchema);

// Export the student model
module.exports = Cohort;
