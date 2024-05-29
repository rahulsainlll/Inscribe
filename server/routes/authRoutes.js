const express = require("express");
const router = express.Router();
const cors = require("cors");

// Controller
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

//middlewares
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.get("/profile", getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
