const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");
const {
  formModel1,
  formModel2,
  formModel3,
  formModel4,
} = require("../models/form");

const submitForm1 = async (req, res) => {
  try {
    const newUser = new formModel1(req.body);
    await newUser.save();
    console.log("User data saved successfully:", newUser);
    res.send({
      message: "User data saved successfully",
      ID: newUser._id,
    });
  } catch (error) {
    console.error("Error details:", error); 
    res.status(500).send("Error saving user data: " + error.message);
  }
};

const submitForm2 = async (req, res) => {
  try {
    const newUser = new formModel2(req.body);
    await newUser.save();
    console.log("User data saved successfully:", newUser);
    res.send({
      message: "User data saved successfully",
      ID: newUser._id,
    });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).send("Error saving user data: " + error.message);
  }
};

const submitForm3 = async (req, res) => {
  try {
    const newUser = new formModel3(req.body);
    await newUser.save();
    console.log("User data saved successfully:", newUser);
    res.send({
      message: "User data saved successfully",
      ID: newUser._id,
    });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).send("Error saving user data: " + error.message);
  }
};

const submitForm4 = async (req, res) => {
  try {
    const newUser = new formModel4(req.body);
    await newUser.save();
    console.log("User data saved successfully:", newUser);
    res.send({
      message: "User data saved successfully",
      ID: newUser._id,
    });
  } catch (error) {
    console.error("Error details:", error);
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
    form.getTextField("nomination").setText(user.nomination);
    form.getTextField("by").setText(user.by);

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

const generatePdf2 = async (req, res) => {
  try {
    const user = await formModel2.findById(req.params.id);

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
    const booleanFields = [
      "club",
      "community",
      "society",
      "groups",
      "a",
      "b",
      "c",
      "d",
      "specific",
      "challenge",
      "outreach",
      "incubation",
      "secretary",
      "jointsecretary",
    ];
    booleanFields.forEach((field) => {
      if (user[field]) form.getCheckBox(field).check();
    });

    form.getTextField("details").setText(user.details);
    form.getTextField("eid").setText(user.eid);
    form.getTextField("id").setText(user.id);
    form.getTextField("year").setText(user.year.toString());
    form.getTextField("number").setText(user.number);
    form.getTextField("curricular").setText(user.curricular.toString());
    form.getTextField("program").setText(user.program);
    form.getTextField("specialization").setText(user.specialization);
    form.getTextField("achievements").setText(user.achievements);
    form.getTextField("club2").setText(user.club2);
    form.getTextField("event").setText(user.event);
    form.getTextField("name2").setText(user.name2);
    form.getTextField("designation").setText(user.designation);
    form.getTextField("signature").setText(user.signature);
    form.getTextField("nomination").setText(user.nomination);
    form.getTextField("by").setText(user.by);

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

const generatePdf3 = async (req, res) => {
  try {
    const user = await formModel3.findById(req.params.id);

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

    // Set form fields based on the form schema
    form.getTextField("details").setText(user.details);
    form.getCheckBox("chiefadvisor").check(user.chiefadvisor);
    form.getCheckBox("advisoryboard").check(user.advisoryboard);
    form.getTextField("eid").setText(user.eid);
    form.getTextField("number").setText(user.number.toString());
    form.getTextField("email").setText(user.email);
    form.getTextField("designation").setText(user.designation);
    form.getTextField("curricular").setText(user.curricular.toString());
    form.getTextField("department").setText(user.department);
    form.getTextField("specialization").setText(user.specialization);
    form.getTextField("achievements").setText(user.achievements);
    form.getTextField("club").setText(user.club);
    form.getTextField("event").setText(user.event);
    form.getTextField("novelty").setText(user.novelty);
    form.getTextField("name").setText(user.name);
    form.getTextField("dept").setText(user.dept);
    form.getTextField("signature").setText(user.signature);
    form.getTextField("nomination").setText(user.nomination);
    form.getTextField("by").setText(user.by);
 

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

const generatePdf4 = async (req, res) => {
  try {
    const user = await formModel4.findById(req.params.id);

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

    form.getTextField("name").setText(user.name);
    form.getTextField("date").setText(user.date.toISOString().split("T")[0]);
    form.getCheckBox("club").check(user.club);
    form.getCheckBox("community").check(user.community);
    form.getCheckBox("dept").check(user.dept);
    form.getCheckBox("groups").check(user.groups);
    form.getCheckBox("a").check(user.a);
    form.getCheckBox("b").check(user.b);
    form.getCheckBox("c").check(user.c);
    form.getCheckBox("d").check(user.d);
    form.getCheckBox("skillbased").check(user.skillbased);
    form.getCheckBox("hackathon").check(user.hackathon);
    form.getCheckBox("incubation").check(user.incubation);
    form.getCheckBox("outreach").check(user.outreach);
    form.getTextField("namedept").setText(user.namedept);
    form.getCheckBox("faculty").check(user.faculty);
    form.getCheckBox("student").check(user.student);
    form.getTextField("facultyadvisor").setText(user.facultyadvisor);
    form.getTextField("pfa1name").setText(user.pfa1name);
    form.getTextField("pfa1number").setText(user.pfa1number);
    form.getTextField("pfa2name").setText(user.pfa2name);
    form.getTextField("pfa2number").setText(user.pfa2number);
    form.getTextField("pfcoa1name").setText(user.pfcoa1name);
    form.getTextField("pfcoa1number").setText(user.pfcoa1number);
    form.getTextField("pfcoa2name").setText(user.pfcoa2name);
    form.getTextField("pfcoa2number").setText(user.pfcoa2number);
    form.getTextField("mentorname").setText(user.mentorname);
    form.getTextField("mentornumber").setText(user.mentornumber);
    form.getTextField("studentsecretary").setText(user.studentsecretary);
    form.getTextField("pss1name").setText(user.pss1name);
    form.getTextField("pss1number").setText(user.pss1number);
    form.getTextField("pss2name").setText(user.pss2name);
    form.getTextField("pss2number").setText(user.pss2number);
    form.getTextField("psjs1name").setText(user.psjs1name);
    form.getTextField("psjs1number").setText(user.psjs1number);
    form.getTextField("psjs2name").setText(user.psjs2name);
    form.getTextField("psjs2number").setText(user.psjs2number);
    form.getTextField("recommendation").setText(user.recommendation);
    form.getTextField("council").setText(user.council);
    form.getTextField("recnotrec").setText(user.recnotrec);
    form.getTextField("signature").setText(user.signature);

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

const formData = async (req, res) => {
  const { formName } = req.params;
  try {
    let formData;
    switch (formName) {
      case "form1":
        formData = await formModel1.find();
        break;
      case "form2":
        formData = await formModel2.find();
        break;
      case "form3":
        formData = await formModel3.find();
        break;
      case "form4":
        formData = await formModel4.find();
        break;
      default:
        return res.status(400).send("Invalid form name");
    }
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).send("Error fetching forms");
  }
};


module.exports = {
  submitForm1,
  submitForm2,
  submitForm3,
  submitForm4,
  formData,
  generatePdf,
  generatePdf2,
  generatePdf3,
  generatePdf4,
};