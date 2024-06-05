import React, { useState, useEffect } from "react";

import "../css/Timetable.css";
import Exclamation_mark from "../../assets/img/Exclamation_mark.png";

const Timetable = () => {
    const goManual = () => {
      window.location.href = "/timetable/manual";
    };

    const goFitering = () => {
      window.location.href = "/timetable/subject";
    }
    return (
      <div className="timetable_container">
        <img className="timetable_goback" src={Exclamation_mark}></img>
        <div className="timetable_title1">시간표를</div>
        <div className="timetable_title2">짜러 가볼까요?</div>
        <button className="timetable_manualButton" onClick={goManual}>직접 짜기</button>
        <button className="timetable_filteringButton" onClick={goFitering}>필터링해서 짜기</button>
      </div>
    );
  };
  
  export default Timetable;
