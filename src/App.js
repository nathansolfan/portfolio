import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/HomeColor";

import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home2 from "./Home2/Home2";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <Router>
      <div>
        <Navbar />{" "}
        {/* Now Navbar and its children have access to routing context */}
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
