import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import good from "../../assets/img/check_good.png";
import bad from "../../assets/img/check_bad.png";
import info from "../../assets/img/Information.png";

const MakePW = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem("value"));
    if (value.length !== 5) {
      window.location.href = "/signup";
    }
  });

  const checkPassword = (str) => {
    const hasLetter = /[a-zA-Z]/.test(str); // 영문 확인
    const hasDigit = /\d/.test(str); // 숫자 확인
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str); // 특수 문자 확인
    const checkLength = password.length >= 12;
    return hasLetter && hasDigit && hasSpecialChar && checkLength;
  };

  const Join = (event) => {
    event.preventDefault();
    const span = document.querySelector("#message");
    if (password !== repassword) {
      span.className = "";
    } else {
      //회원가입로직 -> sessionStore 정보 활용
      alert("회원가입완료!");
      window.location.href = "/login";
    }
  };
  return (
    <div>
      {/* <img src={back} className="goback" onClick={goBack} /> */}
      <h1>사용하실 비밀번호를 알려주세요.</h1>
      <form>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="사용하실 비밀번호를 입력해주세요."
          />
          {checkPassword(password) ? <img src={good} /> : <img src={bad} />}
          <div>
            <img src={info} />
            <span>
              비밀번호는 영문, 숫자, 특수 문자를 포함하여 12자 이상이어야
              합니다.
            </span>
          </div>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            onChange={(e) => setRepassword(e.target.value)}
            placeholder="비밀번호를 재입력해주세요."
          />
          {password === repassword && password.length > 1 ? (
            <img src={good} />
          ) : (
            <img src={bad} />
          )}

          {password === repassword ? null : (
            <span className="hidden" id="message">
              비밀번호가 일치하지 않습니다.
            </span>
          )}
        </div>
        <button onClick={Join}>회원가입완료</button>
      </form>
    </div>
  );
};

export default MakePW;
