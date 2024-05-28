const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");
const fs = require("fs");
const path = require("path");
const { Form1, Form2 } = require("../model/formSchema");

const pdfTemplate1 = require("../documents/form1Template");
const pdfTemplate2 = require("../documents/form2Template");


router.post("/submit-form1", async (req, res) => {
  try {
    const formData = req.body;
    const form1Data = new Form1(formData);
    await form1Data.save();
    res.status(201).send({
      message: "Form 1 data saved successfully",
      id: form1Data._id,
    });
  } catch (error) {
    console.error("Error saving Form 1 data:", error);
    res.status(500).send("Error saving Form 1 data");
  }
});


router.post("/submit-form2", async (req, res) => {
  try {
    const formData = req.body;
    const form2Data = new Form2(formData);
    await form2Data.save();
    res.status(201).send({
      message: "Form 2 data saved successfully",
      id: form2Data._id,
    });
  } catch (error) {
    console.error("Error saving Form 2 data:", error);
    res.status(500).send("Error saving Form 2 data");
  }
});

// Endpoint to create a PDF from a form's data
router.post("/create-pdf/:id/:formNumber", async (req, res) => {
  const { id, formNumber } = req.params;
  let formData;
  let pdfTemplate;

  try {
    if (formNumber === "form1") {
      formData = await Form1.findById(id);
      pdfTemplate = pdfTemplate1;
    } else if (formNumber === "form2") {
      formData = await Form2.findById(id);
      pdfTemplate = pdfTemplate2;
    } else {
      return res.status(400).send("Invalid form number");
    }

    if (!formData) {
      return res.status(404).send("Form data not found");
    }

    const filePath = path.join(__dirname, "../pdfs", `result_${id}.pdf`);
    pdf.create(pdfTemplate(formData), {}).toFile(filePath, (err) => {
      if (err) {
        console.error("Error creating PDF:", err);
        return res.status(500).send("Error creating PDF");
      } else {
        return res.status(200).send("PDF created successfully");
      }
    });
  } catch (error) {
    console.error("Error creating PDF:", error);
    res.status(500).send("Error creating PDF");
  }
});

// Endpoint to fetch a generated PDF
router.get("/fetch-pdf/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const filePath = path.join(__dirname, "../pdfs", `result_${id}.pdf`);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("PDF not found");
    }
  } catch (error) {
    console.error("Error fetching PDF:", error);
    res.status(500).send("Error fetching PDF");
  }
});

// Endpoint to fetch all data from a specific form collection
router.get("/forms-data/:formName", async (req, res) => {
  const { formName } = req.params;
  try {
    let formData;
    if (formName === "form1") {
      formData = await Form1.find();
    } else if (formName === "form2") {
      formData = await Form2.find();
    } else {
      return res.status(400).send("Invalid form name");
    }
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).send("Error fetching forms");
  }
});

module.exports = router;
