import React, { useState, useEffect } from "react";

import "./SndFilHateCheck.css";
import back from "../../assets/img/back.png";

const SndFilHateCheck = () => {
    const goBack = () => {
      window.location.href = "/sndFilHateProf";
    };
    const goNext = () => {
      window.location.href = "/sndFilLoading";
    }
    return (
      <div className="sfhc_container">
        <img className="goback" src={back} onClick={goBack}></img>
        <div className="sfhc_title1">스타일이 맞지 않는 교수님이에요.</div>
        <div className="sfhc_title2">정보가 정확한지 확인해 주세요!</div>
        <div className="sfhc_content">
          <div className="sfhc_line"></div>
          <div className="sfhc_infoContainer">
            <div className="sfhc_info">컴퓨터구조론, 최영규</div>
            <div className="sfhc_info">알고리즘, 김영호</div>
            <div className="sfhc_info">객체지향프로그래밍1, 이연</div>
            <div className="sfhc_info">오퍼레이팅시스템, 정진만</div>
            <div className="sfhc_info">프로그래밍언어 이론, 김지응</div>
            <div className="sfhc_info">자바기반응용 프로그래밍, 이욱</div>
          </div>
          <div className="sfhc_buttons">
            <button className="sfhc_againButton" onClick={goBack}>
            다시 선택할래요
            </button>
            <button className="sfhc_nextButton" onClick={goNext}>
            네, 일치해요
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SndFilHateCheck;
