import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useState, useEffect } from "react";

import "./FirstFilteringTimetable.css";
import blue_heart from "../../assets/img/blue_heart.png";
import gray_heart from "../../assets/img/gray_heart.png";
import back from "../../assets/img/back.png";
import Schedule from "../Schedule.js";

const FirstFilteringTimetable = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => {
    setIsLiked(!isLiked);
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
        <SwiperSlide>
          <div className="fflt_theader">
            <div className="fflt_title">시간표 1</div>
            <img
              src={isLiked ? blue_heart : gray_heart}
              onClick={handleToggle}
              className="fflt_heart"
            />
          </div>
          <div className="fflt_content">
            <Schedule />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fflt_theader">
            <div className="fflt_title">시간표 2</div>
            <img
              src={isLiked ? blue_heart : gray_heart}
              onClick={handleToggle}
              className="fflt_heart"
            />
          </div>
          <div className="fflt_content">
            <Schedule />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fflt_theader">
            <div className="fflt_title">시간표 3</div>
            <img
              src={isLiked ? blue_heart : gray_heart}
              onClick={handleToggle}
              className="fflt_heart"
            />
          </div>
          <div className="fflt_content">
            <Schedule />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fflt_theader">
            <div className="fflt_title">시간표 4</div>
            <img
              src={isLiked ? blue_heart : gray_heart}
              onClick={handleToggle}
              className="fflt_heart"
            />
          </div>
          <div className="fflt_content">
            <Schedule />
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="fflt_nextButton" onClick={goNext}>
        다음으로 넘어가기
      </button>
    </div>
  );
};

export default FirstFilteringTimetable;
