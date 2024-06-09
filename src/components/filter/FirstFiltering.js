import React, { useState } from "react";

import back from "../../assets/img/back.png";
import find from "../../assets/img/find.png";
import "./FirstFiltering.css";
const FirstFiltering = () => {
  //서버에 넘겨줄 과목들
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [select, setSelect] = useState("");
  //서버로 부터 받을거 -> useState로 치환
  const courseList = [
    "컴퓨터공학과, 컴퓨터구조론, CS201",
    "컴퓨터공학과, 알고리즘, CS202",
    "컴퓨터공학과, 객체지향프로그래밍1, CS202",
    "컴퓨터공학과, 오퍼레이팅시스템, CS202",
    "컴퓨터공학과, 오퍼레이팅시스템, CS203",
    "컴퓨터공학과, 오퍼레이팅시스템, CS204",
    "컴퓨터공학과, 오퍼레이팅시스템, CS205",
    "컴퓨터공학과, 오퍼레이팅시스템, CS206",
    "컴퓨터공학과, 오퍼레이팅시스템, CS207",
  ];

  const handleCourseClick = (course) => {
    if (!selectedCourses.includes(course)) {
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        course,
      ]);
    }
  };

  const handleCourseRemove = (course) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.filter((c) => c !== course)
    );
  };

  const search = async () => {
    //서버로 부터 받기 courseList 갱신
  };
  const goNext = () => {
    localStorage.setItem("courses", JSON.stringify(selectedCourses));
    window.location.href = "/firstFilteringLoading";
  };
  const goBack = () => {
    window.location.href = "/timetable";
  };
  return (
    <div className="first_filtering_container">
      <img src={back} className="goback" onClick={goBack} />
      <div className="first_filtering_main">
        <span>이번 학기에 꼭 수강해야하는</span>
        <span>과목을 알려주세요!</span>
      </div>
      <div className="first_filtering_line"></div>
      <div className="first_filtering_result">
        {selectedCourses.length === 0 ? (
          <span className="first_filtering_result_default">
            아직 아무 과목도 선택하지 않았어요!
          </span>
        ) : (
          <div className="first_filtering_selected_courses_container">
            <span>현재 선택 과목 :</span>
            {selectedCourses.map((course, index) => (
              <div
                key={index}
                className="first_filtering_selected_course"
                onClick={() => handleCourseRemove(course)}
              >
                <span className="first_filtering_selected_course_span">
                  {course.split(", ")[1]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="first_filtering_search">
        <input
          type="text"
          placeholder="학과명, 과목명, 학수번호를 입력하세요."
          className="first_filtering_input"
          onChange={(e) => setSelect(e.target.value)}
        ></input>
        <img src={find} className="first_filtering_find" onClick={search} />
      </div>
      <div className="first_filtering_cross">
        <span className="first_filtering_cross_span">전체 과목</span>
        <div className="first_filtering_cross_line"></div>
      </div>
      <div className="total_course">
        {courseList.map((course, index) => (
          <div key={index} onClick={() => handleCourseClick(course)}>
            {course}
          </div>
        ))}
      </div>
      <button className="first_filtering_nextButton" onClick={goNext}>
        다음으로 넘어가기
      </button>
    </div>
  );
};

export default FirstFiltering;
