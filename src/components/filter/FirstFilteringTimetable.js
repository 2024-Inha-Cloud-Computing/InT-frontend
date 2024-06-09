import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useState } from "react";

import "./FirstFilteringTimetable.css";
import blue_heart from "../../assets/img/blue_heart.png";
import gray_heart from "../../assets/img/gray_heart.png";
import back from "../../assets/img/back.png";
import Schedule from "../Schedule.js";

const FirstFilteringTimetable = () => {
  const [likedStates, setLikedStates] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    setLikedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const goBack = () => {
    window.location.href = "/firstFilteringLoading";
  };

  const goNext = () => {
    window.location.href = "/firstFilteringQuestion";
  };

  return (
    <div className="fflt_container">
      <img src={back} className="goback" onClick={goBack} />
      <Swiper
        className="fflt_swiper"
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={40}
        loop={false}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        speed={200}
      >
        {[1, 2, 3, 4].map((timetable, index) => (
          <SwiperSlide key={index}>
            <div className="fflt_theader">
              <div className="fflt_title">시간표 {timetable}</div>
              <img
                src={likedStates[index] ? blue_heart : gray_heart}
                onClick={() => handleToggle(index)}
                className="fflt_heart"
              />
            </div>
            <div className="fflt_content">
              <Schedule />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="fflt_nextButton" onClick={goNext}>
        다음으로 넘어가기
      </button>
    </div>
  );
};

export default FirstFilteringTimetable;
