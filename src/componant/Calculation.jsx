import React from "react";

function Calculation({ onRemove }) {
  return (
    <div className="calcu-sec">
      <div className="inside-calc">
        <input className="input-form" type="text" placeholder="Enter subject name" />
        <input className="input-form" type="text" placeholder="Enter subject code" />
        <input className="input-form" type="text" placeholder="Enter grade" />
        <input className="input-form" type="number" placeholder="Enter credits" />

        <i
          className="bi bi-x-circle"
          onClick={onRemove}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
        <button>Calculate</button>
    </div>
  );
}

export default Calculation;