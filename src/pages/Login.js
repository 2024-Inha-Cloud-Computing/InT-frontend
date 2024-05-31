import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import logo from "../assets/img/InT.png";
import back from "../assets/img/back.png";
import "../css/Login.css";

const Login = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const formRef = useRef();
  const [cookies, setCookie] = useCookies(["csrftoken"]); // 쿠키
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [error, setError] = useState("");

  const goBack = () => {
    window.location.href = "/";
  };

  async function login(event) {
    event.preventDefault();
    const csrfToken = cookies;
    try {
      const response = await axios.post(
        "http://15.165.34.143:8000/login/",
        // 로그인 요청
        {
          username: formRef.current.id.value,
          password: formRef.current.password.value,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
          withCredentials: true,
        }
      );
      setAccessToken(response.data.access);
      setRefreshToken(response.data.refresh);
      console.log(accessToken, refreshToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      console.error("There was an error logged in", error);
      setError("Invalid credentials");
    }
    // window.location.href = "/timetable";
  }
  const findId = () => {
    window.location.href = "/findId";
  };
  const findPassword = () => {
    window.location.href = "/findPw";
  };
  const goSingup = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="loginPage">
      <img src={back} className="goback" onClick={goBack} />
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <form ref={formRef}>
        <input type="text" name="id" placeholder="아이디 입력" />
        <input type="password" name="password" placeholder="비밀번호 입력" />
        <input type="button" value="로그인" onClick={login} />
      </form>
      <div className="options">
        <span onClick={findId}>아이디 찾기</span>
        <div className="slash"></div>
        <span onClick={findPassword}>비밀번호 찾기</span>
        <div className="slash"></div>
        <span onClick={goSingup}>회원가입</span>
      </div>
    </div>
  );
};

export default Login;
