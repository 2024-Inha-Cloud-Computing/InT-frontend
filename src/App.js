import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home.js";
import "./App.css";
function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // 배포시 EC2 주소가 들어가는 자리이다.
  //   axios
  //     .get("http://localhost:8000")
  //     .then((response) => {
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //     });
  // }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
