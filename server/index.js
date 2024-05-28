require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;

// middleware
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

//routes
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
