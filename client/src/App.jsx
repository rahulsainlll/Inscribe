import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
// Import other form components
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          {/* Add routes for other forms */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
