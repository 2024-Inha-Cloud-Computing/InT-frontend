import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./PhoneEmail.css";

import back from "../assets/img/back.png";
import good from "../assets/img/check_good.png";
import bad from "../assets/img/check_bad.png";

const PhoneEmail = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const [searchParams, setSeratchParams] = useSearchParams();
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("inha.edu");

  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem("value"));
    if (value.length < 2) {
      window.location.href = "/signup";
    } else if (value.length > 2) {
      let newVal = [];
      for (let i = 0; i < 2; i++) {
        newVal.push(value[i]);
      }
      sessionStorage.setItem("value", JSON.stringify(newVal));
    }
  });

  const goBack = () => {
    window.sessionStorage.setItem("value", "");
    setSeratchParams({ name_birth: false });
  };

  const goNext = (event) => {
    event.preventDefault();
    if (
      phone1 !== "" &&
      phone2 !== "" &&
      phone3 !== "" &&
      emailId !== "" &&
      emailDomain !== ""
    ) {
      let value = JSON.parse(window.sessionStorage.getItem("value"));
      value.push(phone1 + "-" + phone2 + "-" + phone3);
      value.push(emailId + "@" + emailDomain);
      window.sessionStorage.setItem("value", JSON.stringify(value));
      setSeratchParams({ name_birth: true, phone_email: true });
    }
  };
  return (
    <div>
      <img src={back} className="goback" onClick={goBack} />
      <h1><p className="phoneEmailTitle1">전화번호와 이메일을</p><p className="phoneEmailTitle2">알려주세요.</p></h1>
      <form>
        <div className="phoneContent">
          <label className="phoneTitle">전화번호</label>
          <div className="phoneInput">
          <div>
              <input className="phoneInputBox1"
                type="text"
                value={phone1}
                onChange={(e) => setPhone1(e.target.value)}
                maxLength="3"
              />
              -
              <input className="phoneInputBox2"
                type="text"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
                maxLength="4"
              />
              -
              <input className="phoneInputBox3"
                type="text"
                value={phone3}
                onChange={(e) => setPhone3(e.target.value)}
                maxLength="4"
              />
            </div>
            {phone1 !== "" && phone2 !== "" && phone3 !== "" ? (
              <img className="checkImg" src={good} />
            ) : (
              <img className="checkImg" src={bad} />
            )}
          </div>
        </div>
        <div className="emailContent">
          <label className="emailTitle">이메일</label>
          <div className="emailInput">
            <div className="emailInputBox">
              <input className="idInput"
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="이메일"
              />
              @
              <select className="domainInput"
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
              >
                <option value="inha.edu">inha.edu</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
              </select>
            </div>
            {emailId !== "" && emailDomain !== "" ? (
              <img className="checkImg" src={good} />
            ) : (
              <img className="checkImg" src={bad} />
            )}
          </div>
        </div>
        <button className="nextButton" onClick={goNext}>다음으로 넘어가기</button>
      </form>
    </div>
  );
};

export default PhoneEmail;
