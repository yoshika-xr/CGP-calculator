import React, { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [semester, setSemester] = useState("");

  const handleSelect = (e) => {
    setSemester(e.target.value);
  };

  const handleSubmit = () => {
    if (semester !== "") {
      setShowPopup(false);
    }
  };

  return (
    <div>
      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Select Semester</h2>

            <select onChange={handleSelect} value={semester}>
              <option value="">--Choose--</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
              <option value="Semester 4">Semester 4</option>
              <option value="Semester 5">Semester 5</option>
              <option value="Semester 6">Semester 6</option>
              <option value="Semester 7">Semester 7</option>
              <option value="Semester 8">Semester 8</option>
            </select>

            <button onClick={handleSubmit}>Continue</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <div>
          <h1>{semester}</h1>

        </div>
      )}
    </div>
  );
}

export default App;