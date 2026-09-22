const Appointment = require("../models/appointment"); // ✅ Capital A
const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const verifyToken = require("../middleware/verifyToken.js");

router.post("/submit", verifyToken, async (req, res, next) => { 
  try {
    const { fullName, email, phone, date, time, service } = req.body;

    if (!fullName || !email || !phone || !date || !time || !service) {
      throw new ExpressError(400, "All required fields must be filled");
    }

    const appointment = new Appointment({
      ...req.body,
      userId: req.user.id
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });

  } catch (err) {
    console.log(err);
    next(err); //
  }
});

router.get("/my-appointments", verifyToken, async (req, res, next) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id }); 
    res.status(200).json(appointments);
  } catch (err) {
    next(err);
  }
});

module.exports = router;