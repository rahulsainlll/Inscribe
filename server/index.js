require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Database not connected", err));

//middlewares
app.use(
  cors({
    credentials: true,
    origin: [process.env.ORIGIN, process.env.ORIGIN2],
  })
);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/", require("./routes/authRoutes"));
app.use("/user", require("./routes/formRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
