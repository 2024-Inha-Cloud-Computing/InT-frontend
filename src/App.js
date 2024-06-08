import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home.js";
import "./App.css";
import Login from "./pages/Login.js";
import Timetable from "./pages/Timetable.js";
import Signup from "./pages/Signup.js";
import FindID from "./pages/FindID.js";
import FindPW from "./pages/FindPW.js";
import Taste from "./pages/Taste.js";
import FirstFilteringLoading from "./components/filter/FirstFilteringLoading.js";
import FirstFiltering from "./components/filter/FirstFiltering.js";
import HomeAftLog from "./pages/HomeAftLog.js";
import FirstFilteringTimetable from "./components/filter/FirstFilteringTimetable.js";
import Schedule from "./components/Schedule.js";

function App() {
  const [message, setMessage] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/homeAftLog" element={<HomeAftLog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/timetable" element={<Timetable />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/findId" element={<FindID />}></Route>
          <Route path="/findPw" element={<FindPW />}></Route>
          <Route path="/taste" element={<Taste />}></Route>
          <Route
            path="/firstFilteringLoading"
            element={<FirstFilteringLoading></FirstFilteringLoading>}
          ></Route>
          <Route
            path="/firstFiltering"
            element={<FirstFiltering></FirstFiltering>}
          ></Route>
          <Route
            path="/firstFilteringTimetable"
            element={<FirstFilteringTimetable></FirstFilteringTimetable>}
          ></Route>
          <Route path="/test" element={<Schedule />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
