import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home2 from "./Home2/Home2";

function App() {
  return (
    <Router>
      {" "}
      {/* Move Router to wrap all components that might use routing context */}
      <div>
        <Navbar />{" "}
        {/* Now Navbar and its children have access to routing context */}
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/register" element={<Register />} />
          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
