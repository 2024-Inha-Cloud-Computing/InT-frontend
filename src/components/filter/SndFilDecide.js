import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import "./SndFilDecide.css";
import back from "../../assets/img/back.png";
import axios from "axios";
import SndFilLoading from "./SndFilLoading";
import Schedule from "../Schedule";

const SndFilDecide = () => {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const getData = async () => {
    const selectedLikeProfessors = JSON.parse(
      localStorage.getItem("selectedLikeProfessors")
    );
    const selectedHateProfessors = JSON.parse(
      localStorage.getItem("selectedHateProfessors")
    );
    const time = JSON.parse(localStorage.getItem("time"));
    const courses = JSON.parse(localStorage.getItem("courses"));
    const id = localStorage.getItem("id");
    const response = await axios.post(
      "http://18.141.146.148:8000/timetablepage/sndFilDecide/",
      {
        time: time,
        selectedHateProfessors: selectedHateProfessors,
        selectedLikeProfessors: selectedLikeProfessors,
        courses: courses,
        id: id,
      }
    );
    const result = await response.data.courses;
    if (result.length == 0) {
      alert("조건을 만족하는 시간표가 없습니다. 다시 필터링을 하세요");
      window.location.href = "/sndHateTime";
    }
    setSchedules(result);
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false); // 페이드 아웃 애니메이션 후 로딩 상태 해제
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);
  const goBack = () => {
    window.location.href = "/sndFilHateCheck";
  };

  const goNext = async () => {
    const id = localStorage.getItem("id");
    try {
      const response = await axios.post(
        "http://18.141.146.148:8000/timetablepage/firstFilteringDecide/",
        {
          final: schedules[currentSlideIndex],
          id: id,
        }
      );
    } catch (error) {
      console.log(error);
    }
    window.location.href = "/manualStartQ";
  };

  if (isLoading) {
    return (
      <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
        <SndFilLoading></SndFilLoading>
      </div>
    );
  }
  return (
    <div className="sfd_container">
      <img src={back} className="goback" onClick={goBack} />
      <Swiper
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="sfd_swiper"
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
            <div className="sfd_theader">
              <div className="sfd_title">시간표 {index + 1}</div>
            </div>
            <div className="sfd_content">
              <Schedule schedule={timetable} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="sfd_nextButton" onClick={goNext}>
        이 시간표로 확정할래요!
      </button>
    </div>
  );
};

export default SndFilDecide;
