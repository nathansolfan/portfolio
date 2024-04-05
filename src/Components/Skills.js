import React from "react";
import pc from "../Images/logo/pc.webp";
import raspberry from "../Images/logo/raspberry.webp";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <p className="skills-para">
          With over 15 years of hands-on experience, a profound expertise PC
          hardware nuances and high-performance computing solutions.
        </p>

        <img src={pc} alt="PC Logo" />
      </div>
      <div className="skills-container">
        <p className="skills-para">
          Versatility of Raspberry Pi, specialized in deploying humidity sensors
          for plant care, that ensure optimal growth and control.
        </p>
        <img src={raspberry} alt="PC Logo" />
      </div>
    </div>
  );
}
