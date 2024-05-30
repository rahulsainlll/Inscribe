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

const formModel1 = mongoose.model("form1", form1Schema);

module.exports = {
  formModel1,
};
