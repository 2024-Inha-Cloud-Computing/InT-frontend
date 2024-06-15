import React, {useState, useEffect} from "react";
import "./ManualContent.css";

import find from "../../assets/img/find.png";
import star from "../../assets/img/star.png";

const ManualContent = ({ handleCourseClick, search, setSelect, totalCredits, setTotalCredits, selectedCourses, courseList }) => {
  return(
    <div className="mc_container">
        {/* 지금 몇 학점 담겨있는지 */}
        <div className="mc_title">현재  {totalCredits}  학점이 시간표에 담겨있어요. </div>
        
        {/* 검색 */}
        <div className="mc_search">
            <input
            type="text"
            placeholder="학과명, 과목명, 학수번호를 입력하세요."
            className="mc_input"
            onChange={(e) => setSelect(e.target.value)}
            ></input>
            <img src={find} className="mc_find" onClick={search} />
      </div>

      {/* 전체 과목 */}
      <div className="mc_total_course">
        {courseList.map((course, index) => (
            <div className="mc_course">
                <div className="mc_line"></div>
                <div className="mc_courseInfoContainer">
                    <div className="mc_courseInfo" key={course.split(", ")[2]}>
                        <div className="mc_courseType">
                            <div className="mc_courseNum">{course.split(", ")[2]}</div>
                            <div className="mc_courseMajorOrNot">{course.split(", ")[6]}</div>
                            <div className="mc_courseGrade">
                                {course.split(", ")[4] !== "전체" ? `${course.split(", ")[4]}학년` : course.split(", ")[4]}
                            </div>
                            <div className="mc_courseCredit">
                                {parseFloat(course.split(", ")[5])}학점
                            </div>
                            <div className="mc_courseRate">
                                <img className="mc_courseRateImg" src={star}></img>
                                <div className="mc_courseRateText">{course.split(", ")[11]}</div>
                            </div>
                        </div>
                        <div className="mc_courseName">{course.split(", ")[3]}</div>
                        <div className="mc_courseProfTime">
                            <div className="mc_courseProf">{course.split(", ")[8]}</div>
                            <div className="mc_courseTime">{course.split(", ")[7]}</div>
                        </div>
                        <div className="mc_courseSubinfo">
                            <div className="mc_courseExamTitle">평가방식</div>
                            <div className="mc_courseExam">{course.split(", ")[9]}</div>
                            <div className="mc_courseEtcTitle">비고</div>
                            <div className="mc_courseEtc">{course.split(", ")[10] ? course.split(",")[10] : "없음"}</div>
                        </div>
                    </div>
                    <div  className="mc_addButton" onClick={() => handleCourseClick(course)}>추가</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ManualContent;