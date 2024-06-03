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
    <div className="emptyClass_container">
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress3"></div>
        </div>
      </div>
      <div className="emptyClass_title">우주 공강을 선호하시나요?</div>
      <div className="emptyClass_info">
        <img className="emptyClass_infoImg" src={info} />
        <div className="emptyClass_infoTxt">
          {" "}
          우주 공강은 3시간 이상 공강이 생기는 것을 말해요!{" "}
        </div>
      </div>
      <div className="emptyClass_line"></div>
      <div className="emptyClass_buttonContainer">
        <button className="emptyClass_btn" onClick={ClickYes}>
          우주 공강 좋아요!
        </button>
        <button className="emptyClass_btn" onClick={ClickNo}>
          우주 공강 싫어요!
        </button>
      </div>
    </div>
  );
};

export default EmptyClass;
