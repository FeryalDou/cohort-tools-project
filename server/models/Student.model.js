//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const { Schema, model } = require("mongoose");

// create Schema

// describe structure of the document
const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      tupe: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    linkedinUrl: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      enum: [
        "English",
        "Spanish",
        "French",
        "German",
        "Portuguese",
        "Dutch",
        "other",
      ],
    },
    program: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"],
    },
    background: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    projects: [],
    cohort: Number,
  },
  {
    timetamps: true,
  }
);

// create the model
//const Student = mongoose.model("Student", studentSchema);
const Student = model("Student", studentSchema);

// Export the student model
module.exports = Student;
