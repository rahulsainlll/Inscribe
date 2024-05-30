import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import { Button } from "@/components/ui/button";
import Modal from "react-modal";
import img from "../assets/form3.jpeg";

const Form3 = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    details: "",
    chiefadvisor: false,
    advisoryboard: false,
    eid: "",
    number: "",
    email: "",
    designation: "",
    curricular: "",
    department: "",
    specialization: "",
    achievements: "",
    club: "",
    event: "",
    novelty: "",
    name: "",
    dept: "",
    signature: "",
    nomination: "",
    by: "",
    form: "form3",
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
      const response = await axios.post("/user/submit-form3", formData);
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
          ADVISORY BOARD: CHIEF ADVISOR/MEMBER OF ADVISORY BOARD
        </h2>

        <p className="font-bold text-lg mb-4">General Points:</p>
        <p className="mb-4 text-cyan-">
          1. Eligibility:
          <br />
          a) Chief Advisor: Minimum of 2 year experience in Chandigarh
          University, Only Professor. [Ph.D Required].
          <br />
          b) Member of Advisory Board: Minimum of 1 year experience in CU,
          Associate Professor [Ph.D Required].
        </p>
        <p className="mb-4">
          2. Required Documents: Updated Resume, Achievement proofs,
          Coordinator-ship proofs, etc.
        </p>
        <p className="mb-4">
          3. Passion,Prior Related Experience and Domain Expertise.
        </p>

        <hr className="mb-10"></hr>

        <FormInput
          label="Advisor Details:"
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
        />
        <label className="mb-2">Position Applied For:</label>
        <FormCheckbox
          label="Chief Advisor"
          name="chiefadvisor"
          checked={formData.chiefadvisor}
          onChange={handleChange}
        />

        <FormCheckbox
          className="mt-4"
          label="Advisory Board Member"
          name="advisoryboard"
          checked={formData.advisoryboard}
          onChange={handleChange}
        />

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
          label="E-Mail ID:"
          type="email"
          name="email"
          value={formData.email}
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
          label="Prior Experience in Co-Curricular Domain(Years)"
          type="number"
          name="curricular"
          value={formData.curricular}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Department:"
          type="text"
          name="department"
          value={formData.department}
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
          label="Previous Related Achievements
Certifications/ Recognitions/ Patents/ Research papers [SCI,SCOPUS]/Leadership]:"
          type="text"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Proposed Vision for Club"
          type="text"
          name="club"
          value={formData.club}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Proposed Flagship Event"
          type="text"
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Novelty:"
          type="text"
          name="novelty"
          value={formData.novelty}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Name:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Dept:"
          type="text"
          name="dept"
          value={formData.dept}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Nomination:"
          type="text"
          name="nomination"
          value={formData.nomination}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Nominated by:"
          type="text"
          name="by"
          value={formData.by}
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

export default Form3;
