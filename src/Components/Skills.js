import React from "react";
import pc from "../Images/logo/pc.webp";
import raspberry from "../Images/logo/raspberry.webp";

export default function Skills() {
  return (
    <div>
      <div className="skills-container">
        <p className="skills-para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quod qui a repellat ratione sed ab delectus eaque! Eos eveniet nisi
          vitae ipsa dolorem repellat earum voluptates, accusamus dignissimos
          veniam.
        </p>
        <img className="logo" src={pc} alt="" />
      </div>
      <div className="skills-container">
        {" "}
        {/* Use the same 'skills-container' class to apply Flexbox */}
        <p className="skills-para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quod qui a repellat ratione sed ab delectus eaque! Eos eveniet nisi
          vitae ipsa dolorem repellat earum voluptates, accusamus dignissimos
          veniam.
        </p>
        <img className="logo1" src={raspberry} alt="" />
      </div>
    </div>
  );
}
