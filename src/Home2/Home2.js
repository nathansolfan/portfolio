import React from "react";
import "../Home/Home.css";
import Home from "../Home/HomeColor";
import Calculator from "../Components/Calculator/Calculator";
import TicTacToe from "../Components/Ticktacktoe/Ticktacktoe";
import image from "../Images/background.webp";

export default function Home2() {
  return (
    <div>
      <div className="hero-section">
        <div className="content-overlay">
          <h2>This is Nathan</h2>
          <p> Proficient in both front-end and back-end development</p>
          <button>Learn More</button>
        </div>
      </div>
      <div>
        <Home />
        <Calculator />
        <div className="card">
          <img src={image} alt="" />
          <svg>
            <defs>
              <filter id="noise">
                <feTurbulence
                  baseFrequency="0.7,0.8"
                  seed="0"
                  type="fractalNoise"
                  result="static"
                />
                <feDisplacementMap in2="SouceGraphic" in="static" scale="20" />
              </filter>
            </defs>
          </svg>
        </div>
        <TicTacToe />
      </div>
    </div>
  );
}
