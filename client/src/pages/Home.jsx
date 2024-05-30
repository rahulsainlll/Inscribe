import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { FaMedal } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [selectedForm, setSelectedForm] = useState("");

  const handleGetStarted = () => {
    if (selectedForm) {
      navigate(`/${selectedForm}`);
    } else {
      alert("Please select a form to proceed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[700px]">
      <a
        href="https://cucet.cuchd.in/?type=gsn-cucet&gad_source=1&gclid=CjwKCAjwx-CyBhAqEiwAeOcTddvy-zFRiugxVZ_jUHpvWJVsdv1KOe2DfGsgkUeapRhqD4Cd3M-BNxoCJfAQAvD_BwE"
        target="_blank"
        rel="noopener noreferrer"
        className="badge-container bg-blue-200 text-blue-800 rounded-full p-2 mb-4 flex items-center"
      >
        <FaMedal className="badge-icon mr-2" />
        <span className="badge-text text-sm"> #1 Chandigarh University </span>
      </a>
      <h1 className="text-2xl lg:text-5xl font-bold mb-4">
        Simplify Your Applications
      </h1>
      <p className="text-sm text-gray-700 mb-6 text-center">
        Fill out forms quickly and efficiently. A seamless process designed for
        your convenience.
      </p>
      <div className="flex items-center mb-4">
        <Button onClick={handleGetStarted} className="mr-2">
          Get started
        </Button>
        <Select
          onValueChange={(value) => setSelectedForm(value)}
          className="w-[180px]"
        >
          <SelectTrigger>
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
    </div>
  );
}

export default Home;
