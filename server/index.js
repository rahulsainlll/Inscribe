const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

// mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Database not connected", err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", require("./routes/authRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
