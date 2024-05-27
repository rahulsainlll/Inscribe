import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", formData)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Receipt ID"
        name="receiptId"
        value={formData.receiptId}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price 1"
        name="price1"
        value={formData.price1}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price 2"
        name="price2"
        value={formData.price2}
        onChange={handleChange}
      />
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
