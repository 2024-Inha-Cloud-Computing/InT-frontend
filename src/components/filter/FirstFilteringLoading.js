import React, { useEffect } from "react";

import filter from "../../assets/img/filter.png";
import back from "../../assets/img/back.png";
import "./FirstFilteringLoading.css";

const FirstFilteringLoading = () => {
  const name = localStorage.getItem("name");
  useEffect(() => {
    const timer1 = setTimeout(() => {
      document.body.classList.add("fade-out");
    }, 2000);

    const timer2 = setTimeout(() => {
      window.location.href = "/firstFilteringTimetable";
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <div className="ffl_container">
      <img src={back} className="goback" />
      <img src={filter} className="ffl_filter" />
      <div className="ffl_main">
        <span className="ffl_main_first">
          시간표 취향과 들어가야하는 과목을 기반으로
        </span>
        <span className="ffl_main_second">
          소연 님 맞춤 시간표를 만들어 봤어요!
        </span>
      </div>
      <div className="ffl_sub">
        <span className="ffl_sub_first">
          우선 시간표를 확인하고, 뒤애서 추가로
        </span>
        <span className="ffl_sub_second">
          조건을 설정할 수 있으니 걱정하지 마세요!
        </span>
      </div>
    </div>
  );
};

export default FirstFilteringLoading;
