import React, { useState, useEffect } from "react";

import "./SndFilHateCheck.css";
import back from "../../assets/img/back.png";

const SndFilHateCheck = () => {
    const goBack = () => {
      window.location.href = "/";
    };
    const goNext = () => {
      window.location.href = "/sndFilLikeProf";
    }
    return (
      <div className="sftc_container">
        <img className="goback" src={back} onClick={goBack}></img>
        <div className="sftc_title1">소연 님이 피해야 하는 시간들이에요.</div>
        <div className="sftc_title2">정보가 정확한지 확인해 주세요!</div>
        <div className="sftc_content">
          <div className="sftc_line"></div>
          <div className="sftc_infoContainer">
            <div className="sftc_info">월요일 9시 ~ 12시</div>
            <div className="sftc_info">월요일 9시 ~ 12시</div>
            <div className="sftc_info">월요일 9시 ~ 12시</div>
            <div className="sftc_info">월요일 9시 ~ 12시</div>
            <div className="sftc_info">월요일 9시 ~ 12시</div>
          </div>
          <div className="sftc_buttons">
            <button className="sftc_againButton" onClick={goBack}>
            다시 선택할래요
            </button>
            <button className="sftc_nextButton" onClick={goNext}>
            네, 일치해요
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SndFilHateCheck;
