const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");
const { formModel1 } = require("../models/form");

const submitForm1 = async (req, res) => {
  try {
    const newUser = new formModel1(req.body);
    await newUser.save();
    res.send({
      message: "User data saved successfully",
      ID: newUser._id,
    });
  } catch (error) {
    res.status(500).send("Error saving user data: " + error.message);
  }
};

const generatePdf = async (req, res) => {
  try {
    const user = await formModel1.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    const pdfPath = path.resolve(
      __dirname,
      `../templates/${req.params.formName}.pdf`
    );
    const existingPdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const form = pdfDoc.getForm();

    // Set form fields
    form.getTextField("name").setText(user.name);
    form.getTextField("date").setText(user.date.toISOString().split("T")[0]);

    // Set checkboxes based on boolean values
    if (user.club) form.getCheckBox("club").check();
    if (user.community) form.getCheckBox("community").check();
    if (user.society) form.getCheckBox("society").check();
    if (user.groups) form.getCheckBox("groups").check();

    if (user.a) form.getCheckBox("a").check();
    if (user.b) form.getCheckBox("b").check();
    if (user.c) form.getCheckBox("c").check();
    if (user.d) form.getCheckBox("d").check();

    if (user.specific) form.getCheckBox("specific").check();
    if (user.challenge) form.getCheckBox("challenge").check();
    if (user.outreach) form.getCheckBox("outreach").check();
    if (user.incubation) form.getCheckBox("incubation").check();

    form.getTextField("eid").setText(user.eid);
    form.getTextField("id").setText(user.id);
    form.getTextField("domain").setText(user.domain.toString());
    form.getTextField("number").setText(user.number);
    form.getTextField("designation").setText(user.designation);
    form.getTextField("institute").setText(user.institute);
    form.getTextField("achievements").setText(user.achievements);
    form.getTextField("name2").setText(user.name2);
    form.getTextField("designation2").setText(user.designation2);
    form.getTextField("signature").setText(user.signature);
    form.getTextField("details").setText(user.details);

    if (user.advisor) form.getCheckBox("advisor").check();
    if (user.coadvisor) form.getCheckBox("coadvisor").check();

    form.getTextField("specialization").setText(user.specialization);
    form.getTextField("entity").setText(user.entity);
    form.getTextField("event").setText(user.event);

    const pdfBytes = await pdfDoc.save();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=output_${user._id}.pdf`,
      "Content-Length": pdfBytes.length,
    });

    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    res.status(500).send("Error generating PDF: " + error.message);
  }
};

const formData =  async (req, res) => {
  const { formName } = req.params;
  try {
    let formData;
    if (formName === "form1") {
      formData = await formModel1.find();
    } else if (formName === "form2") {
      formData = await formModel1.find();
    } else {
      return res.status(400).send("Invalid form name");
    }
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).send("Error fetching forms");
  }
};

module.exports = { submitForm1,formData, generatePdf };