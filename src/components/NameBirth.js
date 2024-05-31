import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import good from "../assets/img/check_good.png";
import bad from "../assets/img/check_bad.png";
const NameBirth = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  useEffect(() => {
    sessionStorage.setItem("value", "");
  });
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const currentYear = new Date().getFullYear();
  const [searchParams, setSeratchParams] = useSearchParams();
  const name_birth = searchParams.get("name_birth");

  const years = [];
  for (let y = currentYear; y >= 1900; y--) {
    years.push(y);
  }

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const days = [];
  for (let d = 1; d <= 31; d++) {
    days.push(d);
  }

  const goBack = () => {
    window.location.href = "/signup";
    window.sessionStorage.setItem("value", "");
  };

  const goNext = (event) => {
    event.preventDefault();
    if (year !== "" && month !== "" && day !== "" && name !== "") {
      const value = [name, year + "-" + month + "-" + day];
      sessionStorage.setItem("value", JSON.stringify(value));
      setSeratchParams({ name_birth: true });
    }
  };
  return (
    <div>
      {/* <img src={back} className="goback" onClick={goBack} /> */}
      <h1>이름과 생년월일을 알려주세요</h1>
      <form>
        <div>
          <label>이름</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
          />
          {name !== "" ? <img src={good} /> : <img src={bad} />}
        </div>
        <div>
          <label>생년월일</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">연도</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">월</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}월
              </option>
            ))}
          </select>

          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">일</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}일
              </option>
            ))}
          </select>
          {year !== "" && month !== "" && day !== "" ? (
            <img src={good} />
          ) : (
            <img src={bad} />
          )}
        </div>
        <button onClick={goNext}>다음으로 넘어가기</button>
      </form>
    </div>
  );
};

export default NameBirth;
