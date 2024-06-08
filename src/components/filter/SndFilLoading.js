import React, { useEffect } from "react";

import filter from "../../assets/img/filter.png";
import back from "../../assets/img/back.png";
import "./SndFilLoading.css";

const SndFilLoading = () => {
  const name = localStorage.getItem("name");
  useEffect(() => {
    const timer1 = setTimeout(() => {
      document.body.classList.add("fade-out");
    }, 2000);

    const timer2 = setTimeout(() => {
      window.location.href = "/sndFilDecide";
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <div className="sfl_container">
      <img src={back} className="goback" />
      <img src={filter} className="sfl_filter" />
      <div className="sfl_main">
        <span className="sfl_main_first">
        마지막으로, 소연 님이 원하는 정보를 
        </span>
        <span className="sfl_main_second">
        기반으로 시간표를 만들었어요!
        </span>
      </div>
    </div>
  );
};

export default SndFilLoading;
