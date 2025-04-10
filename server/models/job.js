import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  appliedDate: Date,
  link: String
});

export default mongoose.model("Job", JobSchema);