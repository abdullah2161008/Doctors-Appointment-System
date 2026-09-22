const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  doctor: { type: String },
  message: { type: String },
  status: { type: String, default: "pending" }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } 
}, { timestamps: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);