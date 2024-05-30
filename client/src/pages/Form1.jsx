import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import { Button } from "@/components/ui/button";
import Modal from "react-modal";
import img from "../assets/form1.png";

const Form1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    club: false,
    community: false,
    society: false,
    groups: false,
    a: false,
    b: false,
    c: false,
    d: false,
    specific: false,
    challenge: false,
    outreach: false,
    incubation: false,
    eid: "",
    id: "",
    domain: "",
    number: "",
    designation: "",
    institute: "",
    achievements: "",
    name2: "",
    designation2: "",
    signature: "",
    details: "",
    advisor: false,
    coadvisor: false,
    specialization: "",
    entity: "",
    event: "",
    nomination: "",
    by: "",
    form: "form1",
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
      const response = await axios.post("/user/submit-form1", formData);
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
        <h2 className="font-bold  text-lg lg:text-xl text-center m-10 font-mono">
          FACULTY/CO-FACULTY ADVISOR: APPLICATION FORM
        </h2>

        <p className="font-bold text-lg mb-4">General Points:</p>
        <p className="mb-4 text-cyan-">
          1. Eligibility:
          <br />
          a) Faculty Advisor: Minimum of 1-year experience in Chandigarh
          University [Ph.D not required].
          <br />
          b) Faculty Co-Advisor: Any Fresher who has recently joined Chandigarh
          University [Ph.D not required].
        </p>
        <p className="mb-4">
          2. Required Documents: Updated Resume, Achievement proofs,
          Coordinator-ship proofs, etc.
        </p>
        <p className="mb-4">
          3. Club may be picked up from the attached document [List of Club@CU
          Document]
        </p>

        <hr className="mb-10"></hr>

        <FormInput
          label="Proposed Entity Name:"
          type="text"
          name="name"
          value={formData.name}
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
              label="Society"
              name="society"
              checked={formData.society}
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
          <label>Category of Entity:</label>
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
          <label className="from-accent-foreground mb-2 mt-2 block">
            Nature of Entity:
          </label>
          <div className="flex flex-wrap space-x-4 mb-2 mt-2">
            <FormCheckbox
              label="Domain Specific (Skill Based)"
              name="specific"
              checked={formData.specific}
              onChange={handleChange}
              required
            />
            <FormCheckbox
              label="Hackathon and Challenge"
              name="challenge"
              checked={formData.challenge}
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
          label="Faculty Name /EID:"
          type="text"
          name="eid"
          value={formData.eid}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Mobile Number:"
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email ID:"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Designation:"
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Prior Experience:"
          type="number"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Department/Institute:"
          type="text"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Specialization:"
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Previous Related Achievements:"
          type="text"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Proposed Vision for Applied Entity:"
          type="text"
          name="entity"
          value={formData.entity}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Proposed Flagship Event:"
          type="text"
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Faculty Advisor/ Faculty Co-Advisor Details"
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
        />

        <div>
          <label>Position Applied For:</label>
          <div className="flex flex-wrap space-x-4 mb-2 mt-2">
            <FormCheckbox
              label="Faculty Advisor"
              name="advisor"
              checked={formData.advisor}
              onChange={handleChange}
            />
            <FormCheckbox
              label="Faculty Co-Advisor"
              name="coadvisor"
              checked={formData.coadvisor}
              onChange={handleChange}
            />
          </div>
        </div>

        <FormInput
          label="Nomination:"
          type="text"
          name="nomination"
          value={formData.nomination}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Nomination by:"
          type="text"
          name="by"
          value={formData.by}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Name:"
          type="text"
          name="name2"
          value={formData.name2}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Designation:"
          type="text"
          name="designation2"
          value={formData.designation2}
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

export default Form1;
