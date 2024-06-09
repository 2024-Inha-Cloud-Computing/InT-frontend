import React, { useState, useEffect } from "react";

import "./SndFilLikeProf.css";
import back from "../../assets/img/back.png";
import up from "../../assets/img/up_triangle.png";
import down from "../../assets/img/down_triangle.png";

const SndFilLikeProf = () => {
    const [expandedCourse, setExpandedCourse] = useState(null);
    const [selectedLikeProfessors, setSelectedLikeProfessors] = useState({});

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
      const storedProfessors = JSON.parse(localStorage.getItem('selectedLikeProfessors'));
      if (storedProfessors) {
        setSelectedLikeProfessors(storedProfessors);
      }
    }, []);

    const toggleCourse = (id) => {
      setExpandedCourse(expandedCourse === id ? null : id);
    };

    const selectLikeProfessor = (courseName, professor) => {
      const newSelectedLikeProfessors = { ...selectedLikeProfessors };
    
      if (newSelectedLikeProfessors[courseName] === professor) {
        delete newSelectedLikeProfessors[courseName]; // 선택 해제
      } else {
        newSelectedLikeProfessors[courseName] = professor; // 새로운 선택
      }
    
      setSelectedLikeProfessors(newSelectedLikeProfessors);
      localStorage.setItem('selectedLikeProfessors', JSON.stringify(newSelectedLikeProfessors));
    };

    const goBack = () => {
      window.location.href = "/sndFilTimeCheck";
    };

    const goSkip = () => {
      window.location.href = "/sndFilHateProf";
    };
    const goNext = () => {
      window.location.href = "/sndFilLikeCheck";
    }
    return (
      <div className="sflp_container">
        <img className="goback" src={back} onClick={goBack}></img>
        <div className="sflp_title1">다음으로, 과목 별로 가장 듣고 싶은</div>
        <div className="sflp_title2">교수님을 선택해 주세요!</div>
        <div className="sflp_content">
          <div className="sflp_courseInfo">
            {courses.map(course => (
            <div key={course.id} className={`course ${expandedCourse === course.id ? 'expanded' : ''}`}>
              <div className="course-info" onClick={() => toggleCourse(course.id)}>
                <span className="course-title">과목 {course.id} </span>
                <span className="course-name"> {course.name} </span> 
                <span className="arrow">
                    {expandedCourse === course.id ?
                    <img src={up} className="sflp_triangle"/> : 
                    <img src={down} className="sflp_triangle"/>}
                </span>
              </div>
              {expandedCourse === course.id && (
                <div className="professor-list">
                  {course.professors.map(professor => (
                    <div
                      key={professor}
                      className={`professor-name ${selectedLikeProfessors[course.name] === professor ? 'selected' : ''}`}
                      onClick={() => selectLikeProfessor(course.name, professor)}
                    >
                      {professor}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>
          <div className="sflp_buttons">
            <button className="sflp_skipButton" onClick={goSkip}>
            그냥 넘어갈래요
            </button>
            <button className="sflp_nextButton" onClick={goNext}>
            다 골랐어요!
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SndFilLikeProf;
