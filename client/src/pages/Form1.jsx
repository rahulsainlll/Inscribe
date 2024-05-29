// src/components/Form1.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Form1 = () => {
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
    <form onSubmit={handleSubmit}>
      <h2>Faculty/Co-Faculty Advisor: Application Form</h2>
      <div>
        <label>Proposed Entity Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Proposed Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Type of Entity:</label>
        <label>
          <input
            type="checkbox"
            name="club"
            checked={formData.club}
            onChange={handleChange}
          />
          Club
        </label>
        <label>
          <input
            type="checkbox"
            name="community"
            checked={formData.community}
            onChange={handleChange}
          />
          Community
        </label>
        <label>
          <input
            type="checkbox"
            name="society"
            checked={formData.society}
            onChange={handleChange}
          />
          Society
        </label>
        <label>
          <input
            type="checkbox"
            name="groups"
            checked={formData.groups}
            onChange={handleChange}
          />
          Groups
        </label>
      </div>
      <div>
        <label>Category of Entity:</label>
        <label>
          <input
            type="checkbox"
            name="a"
            checked={formData.a}
            onChange={handleChange}
          />
          A
        </label>
        <label>
          <input
            type="checkbox"
            name="b"
            checked={formData.b}
            onChange={handleChange}
          />
          B
        </label>
        <label>
          <input
            type="checkbox"
            name="c"
            checked={formData.c}
            onChange={handleChange}
          />
          C
        </label>
        <label>
          <input
            type="checkbox"
            name="d"
            checked={formData.d}
            onChange={handleChange}
          />
          D
        </label>
      </div>
      <div>
        <label>Nature of Entity:</label>
        <label>
          <input
            type="checkbox"
            name="specific"
            checked={formData.specific}
            onChange={handleChange}
          />
          Domain Specific (Skill Based)
        </label>
        <label>
          <input
            type="checkbox"
            name="challenge"
            checked={formData.challenge}
            onChange={handleChange}
          />
          Hackathon and Challenge
        </label>
        <label>
          <input
            type="checkbox"
            name="outreach"
            checked={formData.outreach}
            onChange={handleChange}
          />
          Social Value and Outreach
        </label>
        <label>
          <input
            type="checkbox"
            name="incubation"
            checked={formData.incubation}
            onChange={handleChange}
          />
          Invention and Incubation
        </label>
      </div>
      <div>
        <label>Faculty Name /EID:</label>
        <input
          type="text"
          name="eid"
          value={formData.eid}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Designation:</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Prior Experience:</label>
        <input
          type="number"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Department/Institute:</label>
        <input
          type="text"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Specialization:</label>
        <input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Previous Related Achievements:</label>
        <input
          type="text"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Proposed Vision for Applied Entity:</label>
        <input
          type="text"
          name="entity"
          value={formData.entity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Proposed Flagship Event:</label>
        <input
          type="text"
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Faculty Advisor/ Faculty Co-Advisor Details</label>
        <input
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Position Applied For:</label>
        <label>
          <input
            type="checkbox"
            name="advisor"
            checked={formData.advisor}
            onChange={handleChange}
          />
          Faculty Advisor
        </label>
        <label>
          <input
            type="checkbox"
            name="coadvisor"
            checked={formData.coadvisor}
            onChange={handleChange}
          />
          Faculty Co-Advisor
        </label>
      </div>
      <div>
        <label>Nomination:</label>
        <input
          type="text"
          name="name2"
          value={formData.name2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nominated By:</label>
        <input
          type="text"
          name="designation2"
          value={formData.designation2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Signature:</label>
        <input
          type="text"
          name="signature"
          value={formData.signature}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;
