import React from "react";
import backgroundImg from "../Images/background.webp";

export default function Home2() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust the height as needed
      }}
    >
      <h2>This is Nathan</h2>
      <p>I have a strong foundation in front-end and back-end development</p>
      <button>Learn More</button>
    </div>
  );
}
