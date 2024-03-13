import React from "react";
import backgroundImg from "../Images/bg.webp";
import "../Home/Home.css";
import Home from "../Home/HomeColor";

export default function Home2() {
  return (
    <div>
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevents the background from repeating
          backgroundAttachment: "fixed", // Keeps the background stationary
          overflow: "hidden", // Prevents scrolling due to oversized background
          height: "100vh", // Adjust the height as needed
        }}
      >
        <h2>This is Nathan</h2>
        <p>I have a strong foundation in front-end and back-end development</p>
        <button>Learn More</button>
      </div>

      <div>
        <Home />
      </div>
    </div>
  );
}
