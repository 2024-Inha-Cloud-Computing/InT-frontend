import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { useState, useEffect } from 'react';

import "./SndFilDecide.css";
import back from "../../assets/img/back.png";
import Schedule from '../Schedule.js';


const SndFilDecide = () => {
    const goBack = () => {
        window.location.href = "/sndFilHateCheck";
      };

    const goNext = () => {
        window.location.href = "/";
    }

    return (
      <div className="sfd_container">
        <img src={back} className="goback" onClick={goBack}/>
        <Swiper
            className="sfd_swiper"
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={40}
            loop={false}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            speed = {200}
        >
            <SwiperSlide>
                <div className='sfd_theader'>
                    <div className="sfd_title">시간표 1</div>
                </div>
                <div className="sfd_content"><Schedule/></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='sfd_theader'>
                    <div className="sfd_title">시간표 2</div>
                </div>
                <div className="sfd_content"><Schedule/></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='sfd_theader'>
                    <div className="sfd_title">시간표 3</div>
                </div>
                <div className="sfd_content"><Schedule/></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='sfd_theader'>
                    <div className="sfd_title">시간표 4</div>
                </div>
                <div className="sfd_content"><Schedule/></div>
            </SwiperSlide>
        </Swiper>
        <button className="sfd_nextButton" onClick={goNext}>이 시간표로 확정할래요!</button>
      </div>
    );
  };
  
  export default SndFilDecide;
