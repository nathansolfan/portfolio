import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/HomeColor";

import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home2 from "./Home2/Home2";
import Calculator from "./Components/Calculator/Calculator";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Ticktacktoe from "./Components/Ticktacktoe/Ticktacktoe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />{" "}
        {/* Now Navbar and its children have access to routing context */}
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
