import React, { useState, useEffect } from "react";

import "./SndFilLikeCheck.css";
import back from "../../assets/img/back.png";

const SndFilLikeCheck = () => {
    const goBack = () => {
      window.location.href = "/sndFilLikeProf";
    };
    const goNext = () => {
      window.location.href = "/sndFilHateProf";
    }
    return (
      <div className="sflc_container">
        <img className="goback" src={back} onClick={goBack}></img>
        <div className="sflc_title1">소연 님이 원하는 교수님 수업이에요.</div>
        <div className="sflc_title2">정보가 정확한지 확인해 주세요!</div>
        <div className="sflc_content">
          <div className="sflc_line"></div>
          <div className="sflc_infoContainer">
            <div className="sflc_info">컴퓨터구조론, 최영규</div>
            <div className="sflc_info">알고리즘, 김영호</div>
            <div className="sflc_info">객체지향프로그래밍1, 이연</div>
            <div className="sflc_info">오퍼레이팅시스템, 정진만</div>
            <div className="sflc_info">프로그래밍언어 이론, 김지응</div>
            <div className="sflc_info">자바기반응용 프로그래밍, 이욱</div>
          </div>
          <div className="sflc_buttons">
            <button className="sflc_againButton" onClick={goBack}>
            다시 선택할래요
            </button>
            <button className="sflc_nextButton" onClick={goNext}>
            네, 일치해요
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SndFilLikeCheck;
