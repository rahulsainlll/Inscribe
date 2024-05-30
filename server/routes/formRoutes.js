const express = require("express");
const router = express.Router();

// Controller
const {
  submitForm1,
  generatePdf,
  formData,
  generatePdf2,
} = require("../controllers/fromController");

router.post("/submit-form1", submitForm1);
router.get("/generate-pdf-form1/:id/:formName", generatePdf);
router.get("/generate-pdf-form2/:id/:formName", generatePdf2);
router.get("/data/:formName", formData);

module.exports = router;
