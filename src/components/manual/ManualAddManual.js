import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import BottomSheet from "./ManualBottomSheet";
import back from "../../assets/img/back.png";
import Schedule from "../Schedule";
import bulb from "../../assets/img/lightbulb.png";
import "./ManualAddManual.css";

const BaseDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ManualAddManual = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [select, setSelect] = useState("");
  const [totalCredits, setTotalCredits] = useState(0);

  const courseList = [
    "컴퓨터공학과, , CSE1103-001, 객체지향프로그래밍 2, 전체, 3.0, 전공필수, 화4,5,6,7,목4,5,6,7(하-324), 이선우, 절대평가, 선수, 5.0",
    "컴퓨터공학과, , CSE1101-001, 객체지향프로그래밍 1, 1, 3.0, 전공필수, 화4,5,6,7(하-120) /수9,10,11,12(하-322), 한경숙, 상대평가, , 5.0",
    "컴퓨터공학과, , CSE1101-002, 객체지향프로그래밍 1, 1, 3.0, 전공필수, 화9,10,11,12(하-120) /수13,14,15,16(하-322), 한경숙, 상대평가, , 5.0",
    "컴퓨터공학과, , CSE2107-003, 자바기반응용프로그래밍, 2, 3.0, 전공선택, 월9,10,11,12,수9,10,11,12(하-324), 권현수, 상대평가, , 5.0",
  ];

  const handleCourseClick = (course) => {
    const courseName = course.split(", ")[3].trim();
    const courseCredit = parseFloat(course.split(", ")[5]);
    if (!selectedCourses.includes(courseName)) {
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        courseName,
      ]);
      setTotalCredits((prevTotalCredits) => prevTotalCredits + courseCredit);
    }
  };

  const handleCourseRemove = (courseName) => {
    const course = courseList.find(c => c.split(", ")[3].trim() === courseName);
    if (course) {
      const courseCredit = parseFloat(course.split(", ")[5]);
      setSelectedCourses((prevSelectedCourses) =>
        prevSelectedCourses.filter((c) => c !== courseName)
      );
      setTotalCredits((prevTotalCredits) => prevTotalCredits - courseCredit);
    }
  };

  const search = async () => {
    //서버로 부터 받기 courseList 갱신
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/homeAftLog?check=true");
  }

  return (
    <BaseDiv>
      <img className="mam_goback" src={back} onClick={goBack} alt="Go Back"></img>
      <div className="mam_Button" onClick={goHome}>확정하기</div>
      <div className="mam_content">
        <div className="mam_alert">
          {selectedCourses.length === 0 ? (
            <div className="mam_info">
              <div className="mam_infoTitle">
                <img className="mam_infoImg" src={bulb}></img>
                <div className="mam_infoText">아직 추가한 과목이 없어요!</div>
              </div>
              <div className="mam_infoSubtext">
                아래 창을 드래그하여 원하는 과목을 직접 선택하여
                <br />시간표에 추가해 주세요.
              </div>
            </div>
          ) : (
            <div className="mam_selectedCoursesContainer">
              <span>현재 선택 과목 :</span>
              {selectedCourses.map((courseName, index) => (
                <div
                  key={courseName}
                  className="mam_selectedCourse"
                  onClick={() => handleCourseRemove(courseName)}
                >
                  <span className="mam_selected_course_span">
                    {courseName}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mam_timetable">
          <Schedule />
        </div>
      </div>
      <BottomSheet
        handleCourseClick={handleCourseClick}
        search={search}
        setSelect={setSelect}
        totalCredits={totalCredits}
        setTotalCredits={setTotalCredits}
        selectedCourses={selectedCourses}
        courseList={courseList}
      />
    </BaseDiv>
  );
};

export default ManualAddManual;