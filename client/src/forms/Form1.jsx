import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

function Form1() {
  const [formData, setFormData] = useState({});
  const [storedFormData, setStoredFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoredFormData(formData); // Store form data
  };

  const handleDownloadPDF = () => {
    // Generate PDF using stored form data
    axios
      .post("http://localhost:3000/create-pdf", storedFormData)
      .then(() =>
        axios.get("http://localhost:3000/fetch-pdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf"); // Download PDF
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <div>
      <h2>Form 1</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Receipt ID"
          name="receiptId"
          value={formData.receiptId || ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {storedFormData && (
        <div>
          <h3>Stored Form Data:</h3>
          <p>Name: {storedFormData.name}</p>
          <p>Receipt ID: {storedFormData.receiptId}</p>
          {/* Render other form fields */}
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
}

export default Form1;
