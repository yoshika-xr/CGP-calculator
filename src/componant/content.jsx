import React, { useState } from "react";
import Calculation from "./Calculation";

function Content() {
  const [forms, setForms] = useState([0]);

  const addForm = () => {
    console.log("clicked");
    setForms([...forms, forms.length]);
  };
  const removeForm = (index) => {
    const updated = forms.filter((_, i) => i !== index);
    setForms(updated);
  };

  return (
    <div className="show-container">
    <div className="calcu-sec">
      {forms.map((_, index) => (
        <Calculation key={index} onRemove={() => removeForm(index)} />
      ))}
    </div>

      <i className="bi bi-plus-circle" onClick={addForm}></i>
      <button>Calculate</button>
    </div>
  );
}

export default Content;
