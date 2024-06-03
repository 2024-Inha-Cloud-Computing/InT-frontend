import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./SchoolCheck.css";
import back from "../../assets/img/back.png"

const SchoolCheck = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const [school, setSchool] = useState(false);
  const [timer, setTimer] = useState(1200);
  const [searchParams, setSeratchParams] = useSearchParams();

  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem("value"));
    if (value.length < 4) {
      window.location.href = "/signup";
    } else if (value.length > 4) {
      let newVal = [];
      for (let i = 0; i < 4; i++) {
        newVal.push(value[i]);
      }
      sessionStorage.setItem("value", JSON.stringify(newVal));
    }
    const countdown = setInterval(() => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const goBack = () => {
    setSeratchParams({ name_birth: true });
  };

  const checkScool = (event) => {
    event.preventDefault();
    const span = document.querySelector("#message");
    //확인하는 로직
    if (!school) {
      span.className = "identifyFail";
    } else {
      span.className = "identifySuccess";
      span.innerText = "인증에 성공하였습니다.";
    }
  };

  const goNext = (event) => {
    event.preventDefault();
    const span = document.querySelector("#message");
    if (!school) {
      span.className = "";
    } else {
      setSeratchParams({ name_birth: true, phone_email: true, id: false });
    }
  };

  return (
    <div className="entire">
      <img src={back} className="goback" onClick={goBack} />
      <div><p className="schoolCheckTitle1">인하대학교 재학생이</p><p className="schoolCheckTitle2">맞는지 확인할게요.</p></div>
      <div className="sendAlert">입력해 주신 이메일로<br />인증번호를 발송했어요!</div>
      <form>
        <div className="schoolCheckContent">
          <input className="numberCheck" type="number" placeholder="인증번호 입력" />
          <span className="timeChecker">{formatTime(timer)}</span>
          <button className="checkButton" onClick={checkScool}>확인</button>
        </div>
        <span id="message" className="hidden">
            인증에 실패하였습니다. 인증번호를 다시 입력해 주세요.
          </span>
      </form>
      <button className="nextCheckButton" onClick={goNext}>다음으로 넘어가기</button>
    </div>
  );
};

export default SchoolCheck;
