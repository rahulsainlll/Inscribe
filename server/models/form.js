const mongoose = require("mongoose");

const form1Schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  club: { type: Boolean },
  community: { type: Boolean },
  society: { type: Boolean },
  groups: { type: Boolean },
  a: { type: Boolean },
  b: { type: Boolean },
  c: { type: Boolean },
  d: { type: Boolean },
  specific: { type: Boolean },
  challenge: { type: Boolean },
  outreach: { type: Boolean },
  incubation: { type: Boolean },
  eid: { type: String, required: true },
  id: { type: String, required: true },
  domain: { type: Number, required: true },
  number: { type: String, required: true },
  designation: { type: String, required: true },
  institute: { type: String, required: true },
  achievements: { type: String, required: true },
  name2: { type: String, required: true },
  designation2: { type: String, required: true },
  signature: { type: String, required: true },
  details: { type: String, required: true },
  advisor: { type: Boolean },
  coadvisor: { type: Boolean },
  specialization: { type: String, required: true },
  entity: { type: String, required: true },
  event: { type: String, required: true },
  nomination: { type: String, required: true },
  by: { type: String, required: true },
  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const form2Schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  club: { type: Boolean },
  community: { type: Boolean },
  society: { type: Boolean },
  groups: { type: Boolean },
  a: { type: Boolean },
  b: { type: Boolean },
  c: { type: Boolean },
  d: { type: Boolean },
  specific: { type: Boolean },
  challenge: { type: Boolean },
  outreach: { type: Boolean },
  incubation: { type: Boolean },

  details: { type: String, required: true },

  secretary: { type: Boolean },
  jointsecretary: { type: Boolean },

  eid: { type: String, required: true },
  id: { type: String, required: true },
  year: { type: Number, required: true },
  number: { type: String, required: true },
  curricular: { type: Number, required: true },
  program: { type: String, required: true },
  specialization: { type: String, required: true },
  achievements: { type: String, required: true },

  club2: { type: String, required: true },
  event: { type: String, required: true },

  name2: { type: String, required: true },
  designation: { type: String, required: true },
  signature: { type: String, required: true },

  nomination: { type: String, required: true },
  by: { type: String, required: true },

  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const form3Schema = new mongoose.Schema({
  details: { type: String, required: true },

  chiefadvisor: { type: Boolean },
  advisoryboard: { type: Boolean },

  eid: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  designation: { type: String, required: true },

  curricular: { type: Number, required: true },
  department: { type: String, required: true },

  specialization: { type: String, required: true },
  achievements: { type: String, required: true },

  club: { type: String, required: true },
  event: { type: String, required: true },

  novelty: { type: String, required: true },

  name: { type: String, required: true },
  dept: { type: String, required: true },
  signature: { type: String, required: true },

  nomination: { type: String, required: true },
  by: { type: String, required: true },

  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const form4Schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },

  club: { type: Boolean },
  community: { type: Boolean },
  dept: { type: Boolean },
  groups: { type: Boolean },

  a: { type: Boolean },
  b: { type: Boolean },
  c: { type: Boolean },
  d: { type: Boolean },

  skillbased: { type: Boolean },
  hackathon: { type: Boolean },
  incubation: { type: Boolean },
  outreach: { type: Boolean },

  namedept: { type: String, required: true },

  faculty: { type: Boolean },
  student: { type: Boolean },

  facultyadvisor: { type: String, required: true },

  pfa1name: { type: String },
  pfa1number: { type: String },
  pfa2name: { type: String },
  pfa2number: { type: String },

  pfcoa1name: { type: String },
  pfcoa1number: { type: String },
  pfcoa2name: { type: String },
  pfcoa2number: { type: String },

  mentorname: { type: String, required: true },
  mentornumber: { type: String, required: true },

  studentsecretary: { type: String, required: true },

  pss1name: { type: String },
  pss1number: { type: String },
  pss2name: { type: String },
  pss2number: { type: String },
  psjs1name: { type: String },
  psjs1number: { type: String },
  psjs2name: { type: String },
  psjs2number: { type: String },

  recommendation: { type: String },
  council: { type: String },
  recnotrec: { type: String },
  signature: { type: String },

  signature: { type: String },

  form: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const formModel1 = mongoose.model("form1", form1Schema);
const formModel2 = mongoose.model("form2", form2Schema);
const formModel3 = mongoose.model("form3", form3Schema);
const formModel4 = mongoose.model("form4", form4Schema);

module.exports = {
  formModel1,
  formModel2,
  formModel3,
  formModel4,
};
