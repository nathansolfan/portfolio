import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          {/* other routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
