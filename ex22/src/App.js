
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import CustomNavbar from "./CustomNavbar";

import {
  Home,
  About,
  Contact,
  Profile
} from "./Pages";

import "./App.css";

function App() {
  return (
    <Router>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
