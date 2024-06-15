import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useState, useEffect } from "react";

import "./SndFilDecide.css";
import back from "../../assets/img/back.png";
import Schedule from "../Schedule.js";
import axios from "axios";

const SndFilDecide = () => {
  const [schedules, setSchedules] = useState([]);
  const getData = async () => {
    const selectedLikeProfessors = localStorage.getItem(
      "selectedLikeProfessors"
    );
    const selectedHateProfessors = localStorage.getItem(
      "selectedHateProfessors"
    );
    const time = localStorage.getItem("time");
    const courses = localStorage.getItem("courses");
    const id = localStorage.getItem("id");
    const response = await axios.post(
      "http://3.1.102.78:8000/timetablepage/sndFilDecide/",
      {
        time: time,
        selectedHateProfessors: selectedHateProfessors,
        selectedLikeProfessors: selectedLikeProfessors,
        courses: courses,
        id: id,
      }
    );
    const result = await response.data.courses;
    console.log(result);
  };
  useEffect(() => {
    getData();
  });
  const goBack = () => {
    window.location.href = "/sndFilHateCheck";
  };

  const goNext = () => {
    window.location.href = "/";
  };

  return (
    <div className="sfd_container">
      <img src={back} className="goback" onClick={goBack} />
      <Swiper
        className="sfd_swiper"
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={40}
        loop={false}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        speed={200}
      >
        {/* {schedules.map((timetable, index) => (
          <SwiperSlide>
          <div className='sfd_theader'>
              <div className="sfd_title">시간표 {index+1}</div>
          </div>
          <div className="sfd_content"><Schedule schedule={timetable}/></div>
      </SwiperSlide>
        ))} */}
      </Swiper>
      <button className="sfd_nextButton" onClick={goNext}>
        이 시간표로 확정할래요!
      </button>
    </div>
  );
};

export default SndFilDecide;
