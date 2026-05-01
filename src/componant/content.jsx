import React, { useState } from "react";
import Calculation from "./Calculation";

function Content() {
  const [subjects, setSubjects] = useState([
    { name: "", code: "", grade: "", credit: "" },
  ]);

  // add form
  const addForm = () => {
    setSubjects([...subjects, { name: "", code: "", grade: "", credit: "" }]);
    // console.log(subjects[subjects.length - 1].name);
  };

  // remove form
  const removeForm = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  // handle input change
  const handleChange = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  // grade → point
  const getGradePoint = (grade) => {
    const map = {
      O: 10,
      "A+": 9,
      A: 8,
      "B+": 7,
      B: 6,
      F: 0,
    };
    return map[grade.toUpperCase()] || 0;
  };
  //handle send data
  const sendData = async () => {
    try {
      const respone = await fetch("http://localhost:5000/calculate", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subjects),
      });
      const result = await respone.json();
      console.log("server response:", result);
    } catch (error) {
      console.error(error);
    }
  };

  // calculate GPA
  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((sub) => {
      const gp = getGradePoint(sub.grade);
      const credit = Number(sub.credit);

      if (!credit) return; // skip empty

      totalPoints += gp * credit;
      totalCredits += credit;
    });

    const gpa =
      totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);

    alert("GPA: " + gpa);
  };

  return (
    <div className="show-container">
      <div className="welcome-content">
        <h1>👋 Welcome!</h1>
        <p>
          Managing your grades doesn’t have to be difficult.<br /> This CGPA
          Calculator helps you quickly calculate your results and stay on top of
          your academic progress.
        </p>
      </div>
      <div className="calcu-sec">
        {subjects.map((sub, index) => (
          <Calculation
            key={index}
            data={sub}
            onChange={(field, value) => handleChange(index, field, value)}
            onRemove={() => removeForm(index)}
          />
        ))}
      </div>

      <i className="bi bi-plus-circle" onClick={addForm}></i>
      <button
        className="calc-btn"
        onClick={() => {
          calculateGPA();
          sendData();
        }}
      >
        Calculate
      </button>
    </div>
  );
}

export default Content;
