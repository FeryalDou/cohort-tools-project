const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

// describe structure of the document
const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  linkedinUrl: String,
  language: [String],
  program: String,
  background: String,
  image: String,
  projects: Array,
  cohort: ObjectId,
});

// create the model
const Student = mongoose.model("Student", studentSchema);

// Export the student model
module.exports = Student;
