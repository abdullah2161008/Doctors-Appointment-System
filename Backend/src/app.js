const dotenv  = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const cors = require("cors");
const ExpressError = require("./utils/ExpressError.js")
const cookieParser  = require("cookie-parser");


app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})); 
app.use(cookieParser());


mongoose
  .connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

const port = process.env.PORT;

app.use("/api/auth",require("./routes/user.js"));
app.use("/api/appointments",require("./routes/appointment.js"));

app.get("/",(req,res)=>{
    res.send("app is working fine");
})

app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not Found"))
})

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).json({ message });
});

app.listen(port,()=>{
    console.log("App is listening on port :",port);
})