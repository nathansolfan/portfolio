import React, { useState } from "react";
import Home from "../Home/Home";
import Calculator from "../Components/Calculator/Calculator";
import TicTacToe from "../Components/Ticktacktoe/Ticktacktoe";
import image from "../Images/img.png";
import react from "../Images/logo/react.png";
import html from "../Images/logo/html.png";
import css from "../Images/logo/css.jpg";
import javascript from "../Images/logo/javascript.png";

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
      <>
        <p className="skills">Languages I`m qualified:</p>
        <div className="logo">
          <img className="img" src={react} alt="" />
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
        </div>
      </>
      <div>
        <Home />
        <Calculator />
        <TicTacToe />
      </div>
    </div>
  );
}
