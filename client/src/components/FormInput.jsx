import React from "react";
import { Input } from "@/components/ui/input";

const FormInput = ({ label, type, name, value, onChange, required }) => (
  <div className="mb-4">
    <label className="from-accent-foreground mb-2 block">{label}</label>
    <Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default FormInput;

