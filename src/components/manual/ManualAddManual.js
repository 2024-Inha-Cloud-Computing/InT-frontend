import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
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
  const [courseList, setCourseList] = useState([]);  // 여기서 선언된 courseList
  const [timetable, setTimetable] = useState([]);

  const getData = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await axios.post(
        "http://18.141.146.148:8000/timetablepage/sndFilDecide/",
        {
          id: id,
        }
      );
      const course = await response.data.courses; // 강의 정보
      const schedule = await response.data.schedule; // 시간표 정보
      setCourseList(course);
      setTimetable(schedule);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const search = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await axios.post(
        "http://18.141.146.148:8000/timetablepage/findCourse/",
        {
          id: id,
          input: select,
        }
      );
      const list = await response.data.courses;
      setCourseList(list);
    } catch (e) {
      console.log(e);
    }
  };

  const update = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await axios.post(
        "http://18.141.146.148:8000/timetablepage/updateSchedule/",
        {
          id: id,
          courses: selectedCourses,
        }
      );
      const updatedSchedule = await response.data.schedule;
      setTimetable(updatedSchedule);
    } catch (error) {
      console.error("Failed to update schedule:", error);
    }
  };

  const handleCourseClick = async (course) => {
    const courseName = course.split(", ")[3].trim();
    const courseCredit = parseFloat(course.split(", ")[5]);
    if (!selectedCourses.includes(courseName)) {
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        courseName,
      ]);
      setTotalCredits((prevTotalCredits) => prevTotalCredits + courseCredit);

      try {
        const id = localStorage.getItem("id");
        const response = await axios.post(
          "http://18.141.146.148:8000/timetablepage/addCourse/",
          {
            id: id,
            course: course,
          }
        );
        const updatedSchedule = await response.data.schedule;
        setTimetable(updatedSchedule);
      } catch (error) {
        console.error("Failed to update schedule:", error);
      }
    }
  };

  const handleCourseRemove = async (courseName) => {
    const course = courseList.find(c => c.split(", ")[3].trim() === courseName);
    if (course) {
      const courseCredit = parseFloat(course.split(", ")[5]);
      setSelectedCourses((prevSelectedCourses) =>
        prevSelectedCourses.filter((c) => c !== courseName)
      );
      setTotalCredits((prevTotalCredits) => prevTotalCredits - courseCredit);

      try {
        const id = localStorage.getItem("id");
        const response = await axios.post(
          "http://18.141.146.148:8000/timetablepage/removeCourse/",
          {
            id: id,
            courseName: courseName,
          }
        );
        const updatedSchedule = await response.data.schedule;
        setTimetable(updatedSchedule);
      } catch (error) {
        console.error("Failed to update schedule:", error);
      }
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/homeAftLog?check=true");
  };

  return (
    <BaseDiv>
      <img className="mam_goback" src={back} onClick={goBack} alt="Go Back"></img>
      <div className="mam_Button" onClick={goHome}>확정하기</div>
      <div className="mam_content">
        <div className="mam_alert">
          {selectedCourses.length === 0 ? (
            <div className="mam_info">
              <div className="mam_infoTitle">
                <img className="mam_infoImg" src={bulb} alt="Info"></img>
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
          <Schedule schedule={timetable} />
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
