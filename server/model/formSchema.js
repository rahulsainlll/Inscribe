require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error", err));

const form1Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  receiptId: {
    type: Number,
    required: true,
  },
  price1: {
    type: Number,
    required: true,
  },
  price2: {
    type: Number,
    required: true,
  },
  form: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const form2Schema = new mongoose.Schema({
  clubName: {
    type: String,
    required: true,
  },
  appliedDate: {
    type: Date,
    required: true,
  },
  natureOfClub: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  facultyName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  coCurricularExperience: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  achievements: {
    type: String,
    required: true,
  },
  vision: {
    type: String,
    required: true,
  },
  flagshipEvent: {
    type: String,
    required: true,
  },
  nominatedBy: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nomineeDesignation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Form1 = mongoose.model("Form1", form1Schema);
const Form2 = mongoose.model("Form2", form2Schema);

module.exports = {
  Form1,
  Form2,
};
