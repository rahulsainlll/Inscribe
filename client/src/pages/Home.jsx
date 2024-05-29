import React from "react";
import {  useNavigate } from "react-router-dom";
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

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/form1");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[700px]">
      <h1 className="text-2xl lg:text-5xl font-bold mb-4">
        Simplify Your Applications
      </h1>
      <p className="text-sm  text-gray-700 mb-6 text-center">
        Fill out forms quickly and efficiently. A seamless process designed for
        your convenience.
      </p>
      <div className="flex items-center mb-4">
        <Button onClick={handleGetStarted} className="mr-2">
          Get started
        </Button>
        {/* Integrate SelectDemo component below */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a form" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Forms</SelectLabel>
              <SelectItem value="form1">Faculty/Co-Faculty Advisor</SelectItem>
              <SelectItem value="form2">Form 2</SelectItem>
              {/* Add more SelectItems for other forms */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Home;
