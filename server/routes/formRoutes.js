const express = require("express");
const router = express.Router();

// Controller
const {
  submitForm1,
  generatePdf,
  formData,
} = require("../controllers/fromController");

router.post("/submit-form1", submitForm1);
router.get("/generate-pdf/:id/:formName", generatePdf);
router.get("/data/:formName", formData);

module.exports = router;
