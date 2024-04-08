import React from "react";
import { useInView } from "react-intersection-observer";
import pc from "../Images/logo/pc.png";
import raspberry from "../Images/logo/raspberry.png";

export default function Skills() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="skills">
      <div ref={ref1} className={`skills-container ${inView1 ? "reveal" : ""}`}>
        <p className="skills-para">
          With over 15 years of hands-on experience, a profound expertise in PC
          hardware nuances and high-performance computing solutions.
        </p>
        <div className="img-box">
          <img src={pc} alt="PC Logo" />
        </div>
      </div>
      <div ref={ref2} className={`skills-container ${inView2 ? "reveal" : ""}`}>
        <p className="skills-para">
          Versatility of Raspberry Pi, specialized in deploying humidity sensors
          for plant care, ensuring optimal growth and control.
        </p>
        <div className="img-box">
          <img src={raspberry} alt="Raspberry Pi Logo" />
        </div>
      </div>
    </div>
  );
}
