import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State to toggle themes

  // Function to toggle the theme
  const toggleTheme = () => {
    console.log("Current theme before toggle:", isDarkTheme ? "Dark" : "Light");
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <div
        className={`home-container ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <style>
          {`
        .home-container {
          background-color: ${isDarkTheme ? "#8fd2ea" : "#d7ab4c"};
        }
      `}
        </style>
        <h1 className="home-title">Homepage</h1>
        <p className="home-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <button onClick={toggleTheme}>Toggle Theme</button>{" "}
        {/* Button to toggle theme */}
      </div>
      <div>
        <p>
          Eligendi, ipsam tempore nam sunt dolores neque, sequi accusamus saepe
          porro, nesciunt quibusdam quia unde. Omnis neque reprehenderit nulla
          laborum quod delectus Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum, optio aliquam omnis sit doloremque minus
          veniam eaque earum, provident modi unde velit incidunt numquam quasi
          rerum aliquid sequi ipsa repellat.
        </p>
      </div>
      <div>
        <p>
          adipisicing elit. Harum, optio aliquam omnis sit doloremque minus
          veniam eaque earum, provident modi unde velit incidunt numquam quasi
          Eligendi, ipsam tempore nam sunt dolores neque, sequi accusamus saepe
          porro, nesciunt quibusdam quia unde. Omnis neque reprehenderit nulla
          laborum quod delectus Lorem ipsum dolor sit amet consectetur rerum
          aliquid sequi ipsa repellat.
        </p>
      </div>
    </div>
  );
}
