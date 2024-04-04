import React, { useState } from "react";
import Home from "../Home/Home";
import Calculator from "../Components/Calculator/Calculator";
import TicTacToe from "../Components/Ticktacktoe/Ticktacktoe";
import image from "../Images/img.png";
import Logo from "../Components/Logo";

export default function HomeNathan() {
  return (
    <div>
      <div className="hero-section">
        <div className="content-overlay">
          <div className="hero-items">
            <h1>NATHAN FERREIRA</h1>
            <p>Full-Stack Developer. HTML/CSS/React</p>
            <button>Learn More</button>
          </div>

          <img src={image} alt="" />
        </div>
      </div>

      <div>
        <Logo />
        <Home />
      </div>
    </div>
  );
}
