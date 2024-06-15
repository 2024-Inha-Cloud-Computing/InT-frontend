import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useState, useEffect } from "react";

import "./FirstFilteringDecide.css";
import back from "../../assets/img/back.png";
import Schedule from "../Schedule.js";

const FirstFilteringDecide = () => {
  const schedules = JSON.parse(localStorage.getItem("liked"));
  const goBack = () => {
    window.location.href = "/firstFilteringQuestion";
  };

  const goNext = () => {
    window.location.href = "/firstFilteringDecide";
  };

  return (
    <div className="ffd_container">
      <img src={back} className="goback" onClick={goBack} />
      <Swiper
        className="ffd_swiper"
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={40}
        loop={false}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        speed={200}
      >
        {schedules.map((timetable, index) => (
          <SwiperSlide>
            <div className="ffd_theader">
              <div className="ffd_title">시간표 {index + 1}</div>
            </div>
            <div className="ffd_content">
              <Schedule schedule={timetable} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="ffd_nextButton" onClick={goNext}>
        이 시간표로 확정할래요!
      </button>
    </div>
  );
};

export default FirstFilteringDecide;
