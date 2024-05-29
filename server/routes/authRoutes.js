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

router.get("/", test);
router.get("/profile", getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
