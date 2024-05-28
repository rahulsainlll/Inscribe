require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;

// firbase 
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://inscribe-74de7.appspot.com",
  databaseURL: "https://inscribe-74de7-default-rtdb.firebaseio.com",
});

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
