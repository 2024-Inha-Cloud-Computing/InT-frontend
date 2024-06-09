import React, { useState, useEffect } from "react";
import "./SndFilLikeCheck.css";
import back from "../../assets/img/back.png";

const SndFilLikeCheck = () => {
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터를 가져옴
    const storedLikedCourses = JSON.parse(localStorage.getItem('selectedLikeProfessors'));
    if (storedLikedCourses && Object.keys(storedLikedCourses).length > 0) {
      const formattedCourses = Object.entries(storedLikedCourses).map(([course, professor]) => ({
        course: course.split(", ")[1], // 과목명만 추출
        professor
      }));
      setLikedCourses(formattedCourses);
    } else {
      setLikedCourses([]); // 데이터가 없으면 빈 배열로 설정
    }
  }, []);

  const goBack = () => {
    window.location.href = "/sndFilLikeProf";
  };

  const goNext = () => {
    window.location.href = "/sndFilHateProf";
  };

  return (
    <div className="sflc_container">
      <img className="goback" src={back} onClick={goBack} alt="Go back" />
      <div className="sflc_title1">소연 님이 원하는 교수님 수업이에요.</div>
      <div className="sflc_title2">정보가 정확한지 확인해 주세요!</div>
      <div className="sflc_content">
        <div className="sflc_line"></div>
        <div className="sflc_infoContainer">
          {likedCourses.length > 0 ? (
            likedCourses.map((item, index) => (
              <div key={index} className="sflc_info">
                {item.course}, {item.professor}
              </div>
            ))
          ) : (
            <div className="sflc_info">선택된 과목이 없습니다.</div>
          )}
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
