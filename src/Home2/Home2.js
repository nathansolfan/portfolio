import React from "react";
import "../Home/Home.css";
import Home from "../Home/HomeColor";

export default function Home2() {
  return (
    <div>
      <div className="hero-section">
        <div className="background-image"></div>
        <div className="content-overlay">
          <h2>This is Nathan</h2>
          <p>
            I have a strong foundation in front-end and back-end development
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}
