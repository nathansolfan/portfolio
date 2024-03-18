import React, { useState } from "react";
import Home from "../Home/Home";
import Calculator from "../Components/Calculator/Calculator";
import TicTacToe from "../Components/Ticktacktoe/Ticktacktoe";
import image from "../Images/img.jpg";

export default function HomeNathan() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="hero-section">
        <div className="content-overlay">
          <h2>This is Nathan</h2>
          <p> Proficient in both front-end and back-end development</p>
          <button>Learn More</button>
          <img src={image} alt="" />
        </div>
      </div>
      <div>
        <Home />
        <Calculator />
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ backgroundColor: isHovered ? "lightblue" : "transparent" }}
        >
          <img src={image} alt="" />
          <svg>
            <defs>
              <filter id="noise">
                <feTurbulence
                  baseFrequency="0.7,0.8"
                  seed="0"
                  type="fractalNoise"
                  result="static"
                >
                  <animate
                    attributeName="seed"
                    values="0;100"
                    dur="800ms"
                    repeatCount="1"
                    begin={isHovered ? "mouseover" : "indefinite"}
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="static" scale="0">
                  <animate
                    attributeName="scale"
                    values="0;80;0"
                    dur="800ms"
                    repeatCount="1"
                    begin={isHovered ? "mouseover" : "indefinite"}
                  />
                </feDisplacementMap>
              </filter>
            </defs>
          </svg>
        </div>
        <TicTacToe />
      </div>
    </div>
  );
}
