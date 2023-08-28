import mongoose from "mongoose";

let pdfSchema = new mongoose.Schema({
  name: { type: String, require: true },
  post: { type: String, require: true },
  summary: { type: String, require: true },
  education: { type: String, require: false},
  projects: { type: String, require: true },
  skills: { type: String, require: true },
  tools: { type: String, require: true },
  langaugeSkills: { type: String, require: true },
  contactUs: { type: String, require: false },
});

const PDF = mongoose.model("Pdf", pdfSchema);
module.exports = PDF