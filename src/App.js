import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home/HomeColor";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home2 from "./Home2/Home2";
import Calculator from "./Components/Calculator/Calculator";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Ticktacktoe from "./Components/Ticktacktoe/Ticktacktoe";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />{" "}
        {/* Now Navbar and its children have access to routing context */}
        <div
          className="cursor-ball"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        ></div>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Ticktacktoe" element={<Ticktacktoe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
