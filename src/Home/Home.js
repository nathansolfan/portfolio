import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`home-container ${darkTheme ? "dark-theme" : ""}`}>
      <h1 className="home-title">Homepage</h1>
      <p className="home-paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit...
      </p>
      {/* Slider Switch */}
      <label className="theme-switcher">
        <input type="checkbox" onChange={() => setDarkTheme(!darkTheme)} />
        <span className="slider"></span> {/* This line was missing */}
        Toggle Dark Theme
      </label>
    </div>
  );
}
