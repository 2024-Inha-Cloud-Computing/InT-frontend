import React, { useState, useEffect } from "react";

import "./SndFilHateProf.css"; // 파일명도 바꾸는 것이 좋습니다
import back from "../../assets/img/back.png";
import up from "../../assets/img/up_triangle.png";
import down from "../../assets/img/down_triangle.png";

const SndFilHateProf = () => { // 컴포넌트 이름도 바꿉니다
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [selectedHateProfessors, setSelectedHateProfessors] = useState([]);

  const courses = [
    { id: 1, name: '컴퓨터공학과, 컴퓨터구조론, CSE3246', professors: ['최영규', '이어진', '정진만'] },
    { id: 2, name: '컴퓨터공학과, 알고리즘, CSE2345', professors: ['교수 1', '교수 2', '교수 3'] },
    { id: 3, name: '컴퓨터공학과, 운영체제, CSE2345', professors: ['교수 4', '교수 5', '교수 6', '교수 10', '이욱', '이연', '김지응', '김영호'] },
    { id: 4, name: '컴퓨터공학과, 컴퓨터구조론, CSE7896', professors: ['교수 7', '교수 8', '교수 9'] },
    { id: 5, name: '컴퓨터공학과, 프로그래밍언어 이론, CSE7896', professors: ['교수 7', '교수 8', '교수 9'] },
    { id: 6, name: '컴퓨터공학과, 자바기반 응용프로그래밍, CSE7896', professors: ['교수 7', '교수 8', '교수 9'] },
  ];

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 선택된 교수님 데이터를 로드합니다.
    const storedProfessors = JSON.parse(localStorage.getItem('selectedHateProfessors'));
    if (storedProfessors) {
      setSelectedHateProfessors(storedProfessors);
    }
  }, []);

  const toggleCourse = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  const selectHateProfessor = (courseName, professor) => {
    let newSelectedHateProfessors = [...selectedHateProfessors];
    const existingIndex = newSelectedHateProfessors.findIndex(item => item.course === courseName);

    if (existingIndex !== -1) {
      newSelectedHateProfessors[existingIndex] = { course: courseName, professor };
    } else {
      newSelectedHateProfessors.push({ course: courseName, professor });
    }
  
    setSelectedHateProfessors(newSelectedHateProfessors);
    localStorage.setItem('selectedHateProfessors', JSON.stringify(newSelectedHateProfessors));
  };



  const goBack = () => {
    window.location.href = "/sndFilLikeCheck";
  };

  const goSkip = () => {
    window.location.href = "/sndFilLoading"; 
  };

  const goNext = () => {
    window.location.href = "/sndFilHateCheck"; // '싫어하는 교수' 검증 페이지로 넘어갑니다
  };

  return (
    <div className="sfhp_container">
      <img className="goback" src={back} onClick={goBack} alt="Go back"></img>
      <div className="sfhp_title1">소연 님의 스타일과 맞지 않는</div>
      <div className="sfhp_title2">교수님을 선택해 주세요!</div>
      <div className="sfhp_content">
        <div className="sfhp_courseInfo">
          {courses.map(course => (
            <div key={course.id} className={`course ${expandedCourse === course.id ? 'expanded' : ''}`}>
              <div className="course-info" onClick={() => toggleCourse(course.id)}>
                <span className="course-title">과목 {course.id}</span>
                <span className="course-name">{course.name}</span>
                <span className="arrow">
                  {expandedCourse === course.id ?
                    <img src={up} className="sflp_triangle" alt="collapse"/> :
                    <img src={down} className="sflp_triangle" alt="expand"/>}
                </span>
              </div>
              {expandedCourse === course.id && (
                <div className="professor-list">
                  {course.professors.map(professor => (
                    <div
                      key={professor}
                      className={`professor-name ${selectedHateProfessors.find(item => item.course === course.name && item.professor === professor) ? 'selected' : ''}`}
                      onClick={() => selectHateProfessor(course.name, professor)}
                    >
                      {professor}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="sfhp_buttons">
          <button className="sfhp_skipButton" onClick={goSkip}>
            그냥 넘어갈래요
          </button>
          <button className="sfhp_nextButton" onClick={goNext}>
            다 골랐어요!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SndFilHateProf;
