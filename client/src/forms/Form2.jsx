import React, { useState } from "react";
import axios from "axios";

function Form2() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for Form 2
  };

  return (
    <div>
      <h2>Form 2</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for Form 2 */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form2;
