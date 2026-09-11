const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const ExpressError = require("../utils/ExpressError.js");

//Signup
router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new ExpressError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ExpressError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // ✅ Signup ke baad bhi token banao aur cookie set karo
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    next(err);
  }
});


//login
router.post("/login",async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            throw new ExpressError("All fields are required",400);
        }

        const user = await User.findOne({email});
        if(!user){
            throw new ExpressError(400, "Invalid credentials");
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            throw new ExpressError(400, "Invalid credentials");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.cookie("token", token, {
        httpOnly: true,
        secure: false,      // production mein true karna
        maxAge: 24 * 60 * 60 * 1000, // 1 din
        });
        res.status(200).json({message: "Login successful" });

    }catch(err){
        console.log(err); 
        next(err);
    }
})

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

const verifyToken = require("../middleware/verifyToken.js");

//Cookie check karo
router.get("/check", verifyToken, (req, res) => {
  res.status(200).json({ message: "Authenticated" });
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out" });
});
module.exports = router;

