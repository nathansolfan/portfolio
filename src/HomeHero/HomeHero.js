import React, { useState } from "react";
import Home from "../Home/Home";
import Calculator from "../Components/Calculator/Calculator";
import TicTacToe from "../Components/Ticktacktoe/Ticktacktoe";
import image from "../Images/img.png";

export default function HomeNathan() {
  return (
    <div>
      <div className="hero-section">
        <div className="content-overlay">
          <div className="hero-items">
            <h2>This is Nathan</h2>
            <p> Proficient in both front-end and back-end development</p>
            <button>Learn More</button>
          </div>

          <img src={image} alt="" />
        </div>
      </div>
      <div>
        <Home />
        <Calculator />

        <TicTacToe />
      </div>
    </div>
  );
}
