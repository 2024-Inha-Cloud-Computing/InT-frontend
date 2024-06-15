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
import instance from "../../access/instance.js";
import axios from "axios";
const FirstFilteringTimetable = () => {
  const [likedStates, setLikedStates] = useState([]);
  const [schedules, setSchedules] = useState([]);

  const getShedule = async () => {
    const id = localStorage.getItem("id");
    const courses = localStorage.getItem("courses");
    const response = await axios.post(
      "http://3.1.102.78:8000/timetablepage/firstFilteringTimetable/",
      {
        courses: courses,
        id: id,
      }
    );
    const list = await response.data.courses;
    setSchedules(list);
    let likes = [];
    list.map(() => likes.push(false));
    setLikedStates(likes);
  };

  useState(() => {
    getShedule();
  }, []);

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
    const final = [];
    likedStates.map((status, index) => {
      if (status) {
        final.push(schedules[index]);
      }
    });
    localStorage.setItem("liked", JSON.stringify(final));
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
        {schedules.map((timetable, index) => (
          <SwiperSlide key={index}>
            <div className="fflt_theader">
              <div className="fflt_title">시간표 {index + 1}</div>
              <img
                src={likedStates[index] ? blue_heart : gray_heart}
                onClick={() => handleToggle(index)}
                className="fflt_heart"
              />
            </div>
            <div className="fflt_content">
              <Schedule schedule={timetable} />
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
