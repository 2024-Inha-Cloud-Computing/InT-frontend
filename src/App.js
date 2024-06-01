import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home.js";
import "./App.css";
import Login from "./pages/Login.js";
import Timetable from "./pages/Timetable.js";
import Signup from "./pages/Signup.js";
import Taste from "./pages/Taste.js";

function App() {
  const [message, setMessage] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/timetable" element={<Timetable />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/taste" element={<Taste />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
