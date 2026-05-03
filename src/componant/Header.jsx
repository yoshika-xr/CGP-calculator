import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-side">
          <i>
            <svg width="60" height="50" viewBox="0 0 100 100">
              <path
                d="M70 20 A35 35 0 1 0 70 80"
                fill="none"
                stroke="#37cf71b4"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="40"
                x2="65"
                y2="40"
                stroke="#353535"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="55"
                x2="65"
                y2="55"
                stroke="#383838"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </i>

          <h2 className={"head-title $"}>EduCalc</h2>
        </div>

        <ul className="head-cont">
          <li>Home</li>
          <li>Score</li>
          <li>CGPA Formula</li>
          <li>CGPA</li>
          <li>Sign</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
