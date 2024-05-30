import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormDataList = () => {
  const [formData, setFormData] = useState([]);
  const [selectedForm, setSelectedForm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user/data/${selectedForm}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, [selectedForm]);

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
        `/user/generate-pdf-form1/${id}/${selectedForm}`,
        {
          responseType: "blob",
        }
      );

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
      <div className="flex items-center mb-4">
        <Select onValueChange={(value) => setSelectedForm(value)}>
          <SelectTrigger className="w-[180px] mt-6">
            <SelectValue placeholder="Select a form" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Forms</SelectLabel>
              <SelectItem value="form1">Faculty/Co-Faculty Advisor</SelectItem>
              <SelectItem value="form2">SECRETARY/JOINT SECRETARY</SelectItem>
              <SelectItem value="form3">
                ADVISORY BOARD: CHIEF ADVISOR/MEMBER OF ADVISORY BOARD
              </SelectItem>
              <SelectItem value="form4">
                PROPOSAL FORM: FORMATION OF ENTITY
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {Object.entries(groupedFormData).map(([date, data]) => (
        <div key={date}>
          <h1 className="font-mono m-10 text-lg">{date}</h1>
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
