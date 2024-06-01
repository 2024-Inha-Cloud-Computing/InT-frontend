import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MakeID = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const [checkID, setCheckID] = useState(true);
  const [ID, setID] = useState("");
  const [searchParams, setSeratchParams] = useSearchParams();

  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem("value"));
    if (value.length !== 4) {
      window.location.href = "/signup";
    }
  });

  const Check = (event) => {
    event.preventDefault();
    //id 중복확인 로직
    const span = document.querySelector("#message");
    if (!checkID) {
      span.className = "";
      span.innerText = "이미 사용중인 아이디입니다.";
    } else {
      span.className = "";
      span.innerText = "사용 가능한 아이디입니다.";
    }
  };
  const goBack = () => {};
  const goNext = (event) => {
    event.preventDefault();
    if (!checkID) {
      const span = document.querySelector("#message");
      span.className = "";
      span.innerText = "사용할 아이디를 입력하고 인증해주세요.";
    } else {
      let value = JSON.parse(window.sessionStorage.getItem("value"));
      value.push(ID);
      sessionStorage.setItem("value", JSON.stringify(value));
      setSeratchParams({
        name_birth: true,
        phone_email: true,
        id: true,
        pw: false,
      });
    }
  };
  return (
    <div>
      {/* <img src={back} className="goback" onClick={goBack} /> */}
      <h1>사용하실 아이디를 입력해주세요.</h1>
      <form>
        <div>
          <label>아이디</label>
          <input
            type="text"
            placeholder="사용하실 아이디를 입력해주세요."
            onChange={(e) => setID(e.target.value)}
          />
          <button onClick={Check}>중복확인</button>
          <span id="message" className="hidden">
            이미 사용중인 아이디입니다.
          </span>
        </div>
      </form>
      <button onClick={goNext}>다음으로 넘어가기</button>
    </div>
  );
};

export default MakeID;
