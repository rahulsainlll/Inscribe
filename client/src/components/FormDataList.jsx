import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const FormDataList = ({ formName }) => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user/data/${formName}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, [formName]);

  // Function to group form data by createdAt date
  const groupFormDataByDate = () => {
    const groupedData = {};
    formData.forEach((data) => {
      const date = new Date(data.createdAt).toLocaleDateString();
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(data);
    });
    return groupedData;
  };

  const handleDownloadPDF = async (id) => {
    try {
      const response = await axios.get(
        `/user/generate-pdf-form1/${id}/${formName}`,
        {
          responseType: "blob", // Ensure response is treated as a binary file
        }
      );

      // Create a blob URL for the PDF and open it in a new tab
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const groupedFormData = groupFormDataByDate();

  return (
    <div>
      {Object.entries(groupedFormData).map(([date, data]) => (
        <div key={date}>
          <h1 className="font-mono m-10 text-lg" >{date}</h1>
          {data.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>{item.name}</span>
              <Button
                className="font-mono"
                onClick={() => handleDownloadPDF(item._id)}
              >
                Download PDF
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FormDataList;
