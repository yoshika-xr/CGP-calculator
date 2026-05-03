import React from "react";
import logo from "../assets/logo1.jpg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-side">
          <img className={"logo"} src={logo} alt="logo" />

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
      <hr />
    </>
  );
}

export default Header;
