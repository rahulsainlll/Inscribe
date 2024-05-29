
import React from "react";

const FormCheckbox = ({ label, name, checked, onChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);

export default FormCheckbox;
