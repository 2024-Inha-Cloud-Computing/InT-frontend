import { useEffect } from "react";
import info from "../../assets/img/Information.png";
import "./EmptyClass.css";

const EmptyClass = () => {
  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem("value"));
    if (value.length == 1) {
      window.location.href = "/taste?time=true&first_class=";
    } else if (value.length > 2) {
      let newVal = [];
      for (let i = 0; i < 2; i++) {
        newVal.push(value[i]);
      }
      sessionStorage.setItem("value", JSON.stringify(newVal));
    }
  });
  const ClickYes = () => {
    //서버 데이터 보내기
    sessionStorage.clear();
    window.location.href = "/timetable";
  };
  const ClickNo = () => {
    //서버 데이터 보내기
    sessionStorage.clear();
    window.location.href = "/timetable";
  };
  return (
    <div className="container">
      <div class="progress-bar-container">
        <div class="progress-bar">
          <div class="progress3"></div>
        </div>
        <div class="dashed-line"></div>
      </div>
      <h1>우주 공강을 선호하시나요?</h1>
      <span>
        <img src={info} /> 우주 공강은 3시간 이상 공강이 생기는 것을 말해요!
      </span>
      <div className="taste-line"></div>
      <div className="button-container">
        <button className="btn" onClick={ClickYes}>
          우주 공강 좋아요!
        </button>
        <button className="btn" onClick={ClickNo}>
          우주 공강 싫어요!
        </button>
      </div>
    </div>
  );
};

export default EmptyClass;
