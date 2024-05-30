import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import { Button } from "@/components/ui/button";
import Modal from "react-modal";
import img from "../assets/form4.png";

const Form4 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    clubname: "",
    date: "",
    club: false,
    community: false,
    dept: false,
    groups: false,
    a: false,
    b: false,
    c: false,
    d: false,
    skillbased: false,
    hackathon: false,
    incubation: false,
    outreach: false,
    namedept: "",
    faculty: false,
    student: false,
    facultyadvisor: "",
    pfa1name: "",
    pfa1number: "",
    pfa2name: "",
    pfa2number: "",
    pfcoa1name: "",
    pfcoa1number: "",
    pfcoa2name: "",
    pfcoa2number: "",
    mentorname: "",
    mentornumber: "",
    studentsecretary: "",
    pss1name: "",
    pss1number: "",
    pss2name: "",
    pss2number: "",
    psjs1name: "",
    psjs1number: "",
    psjs2name: "",
    psjs2number: "",
    recommendation: "",
    council: "",
    recnotrec: "",
    signature: "",
    form: "form4",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/submit-form4", formData);
      navigate(`/`);
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onClick={() => setModalIsOpen(true)}>Preview Form</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Original Form Preview"
      >
        <div className="relative">
          <button
            className="absolute top-0 right-0 m-2 p-2 text-xl text-black bg-white rounded-sm"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
          <img
            src={img}
            alt="Original Form Preview"
            className="max-w-full h-auto"
          />
        </div>
      </Modal>

      <form
        onSubmit={handleSubmit}
        className="text-left w-full max-w-2xl mx-auto p-4 sm:p-8"
      >
        <h2 className="font-bold text-lg lg:text-xl text-center m-10 font-mono">
          PROPOSAL FORM: FORMATION OF ENTITY
        </h2>

        <p className="font-bold text-lg mb-4">General Points:</p>
        <p className="mb-4 text-cyan-">
          1. Recommendation from the Member of Advisory Board is Mandatory.
          <br />
          2. Required Documents: Please refer to the attached Appendix-1.
        </p>

        <hr className="mb-10"></hr>

        <FormInput
          label="Proposed Club Name:"
          type="text"
          name="clubname"
          value={formData.clubname}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Proposed Date:"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <div>
          <label className="mb-2">Type of Entity:</label>
          <div className="flex flex-wrap space-x-4 mb-2 mt-2">
            <FormCheckbox
              label="Club"
              name="club"
              checked={formData.club}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Community"
              name="community"
              checked={formData.community}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Dept.Society"
              name="dept"
              checked={formData.dept}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Groups"
              name="groups"
              checked={formData.groups}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label>Category of Entity [From club List document]:</label>
          <div className="flex flex-wrap space-x-4 mb-2 mt-2">
            <FormCheckbox
              label="A"
              name="a"
              checked={formData.a}
              onChange={handleChange}
            />
            <FormCheckbox
              label="B"
              name="b"
              checked={formData.b}
              onChange={handleChange}
            />
            <FormCheckbox
              label="C"
              name="c"
              checked={formData.c}
              onChange={handleChange}
            />
            <FormCheckbox
              label="D"
              name="d"
              checked={formData.d}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Proposed By:</label>
          <div className="flex flex-wrap space-x-4 mb-2 mt-2">
            <FormCheckbox
              label="Faculty"
              name="faculty"
              checked={formData.faculty}
              onChange={handleChange}
            />
            <FormCheckbox
              label="Student"
              name="student"
              checked={formData.student}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="from-accent-foreground mb-2 mt-2 block">
            Nature of Entity:
          </label>
          <div className="flex flex-wrap space-x-4 mb-2 mt-2">
            <FormCheckbox
              label="Domain Specific (Skill Based)"
              name="skillbased"
              checked={formData.skillbased}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Hackathon and Challenge"
              name="hackathon"
              checked={formData.hackathon}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Social Value and Outreach"
              name="outreach"
              checked={formData.outreach}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Invention and Incubation"
              name="incubation"
              checked={formData.incubation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <FormInput
          label="Faculty Advisor/ Faculty Co-Advisor Details:"
          type="text"
          name="facultyadvisor"
          value={formData.facultyadvisor}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Proposed Faculty Advisor 1 Name/EID"
          type="text"
          name="pfa1name"
          value={formData.pfa1name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pfa1number"
          value={formData.pfa1number}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Proposed Faculty Advisor 2 Name/EID"
          type="text"
          name="pfa2name"
          value={formData.pfa2name}
          onChange={handleChange}
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pfa2number"
          value={formData.pfa2number}
          onChange={handleChange}
        />

        <FormInput
          label="Proposed Faculty Co-Advisor 1 Name/EID"
          type="text"
          name="pfcoa1name"
          value={formData.pfcoa1name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pfcoa1number"
          value={formData.pfcoa1number}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Proposed Faculty Co-Advisor 2 Name/EID"
          type="text"
          name="pfcoa2name"
          value={formData.pfcoa2name}
          onChange={handleChange}
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pfcoa2number"
          value={formData.pfcoa2number}
          onChange={handleChange}
        />

        <FormInput
          label="Secretary / Joint Secretary Details:"
          type="text"
          name="studentsecretary"
          value={formData.studentsecretary}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Proposed Student Secretary 1 Name/UID"
          type="text"
          name="pss1name"
          value={formData.pss1name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pss1number"
          value={formData.pss1number}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Proposed Student Secretary 2 Name/UID"
          type="text"
          name="pss2name"
          value={formData.pss2name}
          onChange={handleChange}
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pss2number"
          value={formData.pss2number}
          onChange={handleChange}
        />

        <FormInput
          label="Proposed Student Joint Secretary 1 Name/UID"
          type="text"
          name="psjs1name"
          value={formData.psjs1name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="psjs2number"
          value={formData.psjs2number}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Proposed Student Joint Secretary 2 Name/UID"
          type="text"
          name="pfcoa2name"
          value={formData.pfcoa2name}
          onChange={handleChange}
        />

        <FormInput
          label="Mobile Number:"
          type="text"
          name="pfcoa2number"
          value={formData.pfcoa2number}
          onChange={handleChange}
        />

        <FormInput
          label="Recommendation:"
          type="text"
          name="recommendation"
          value={formData.recommendation}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Chief Advisor Governing Council:"
          type="text"
          name="council"
          value={formData.council}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Recommended/Not-Recommended:"
          type="text"
          name="recnotrec"
          value={formData.recnotrec}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Signature:"
          type="text"
          name="signature"
          value={formData.signature}
          onChange={handleChange}
          required
        />

        <div className="text-center">
          <Button className="text-lg mb-28" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form4;
