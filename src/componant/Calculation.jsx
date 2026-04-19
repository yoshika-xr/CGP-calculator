import React from "react";

function Calculation() {
  return (
    <>
      <div className="calcu-sec">
        <div className="inside-calc">
        <input className="input-form" type="text" placeholder="Enter subject name" />
        <input className="input-form" type="text" placeholder="Enter subject code" />
        <input className="input-form" type="text" placeholder="Enter grade" />
        <input className="input-form" type="number" placeholder="Enter credits" />
        <i class="bi bi-x-circle"></i>
        </div>
      </div>
    </>
  );
}

export default Calculation;
