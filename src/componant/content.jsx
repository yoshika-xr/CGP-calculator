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
      " O": 10,
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
        <h2 className="title">👋 Welcome to <span className="highlight">EduCalc!</span> </h2>
        <p className="second-tit">Fast. Simple. Accurate.<br/> Calculate your CGPA in seconds.</p>
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

      <i className="plusButton" onClick={addForm}>
        <svg
          class="plusIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <g mask="url(#mask0_21_345)">
            <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
          </g>
        </svg>
      </i>

      {/* <button
        className="calc-btn"
        onClick={() => {
          calculateGPA();
          sendData();
        }}
      >
        Calculate
      </button> */}
      <button
        className="cssbuttons-io"
        onClick={() => {
          calculateGPA();
          sendData();
        }}
      >
        <span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              fill="currentColor"
            ></path>
          </svg>
          Calculate
        </span>
      </button>
    </div>
  );
}

export default Content;
