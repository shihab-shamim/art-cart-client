import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={`https://i.ibb.co/5T7kRL6/pexels-tobiasbjorkli-2690807.jpg`}   alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/bHzTWdd/pexels-jaime-reimer-1376930-2662116.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/HrMHVs3/pexels-andreimike-1271619.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/GQ9QQhf/pexels-ganinph-7790347.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/g7Bx7vL/pexels-dreamypixel-547125.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/3FKHj8P/paved-road-through-forest.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/wWPQ5Bp/a-forest-in-the-middle-of-changing-colors.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/27Tz6QW/prairie-woman-at-sunset.jpg`}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={`https://i.ibb.co/QnfxXTf/woman-pauses-at-foot-of-waterfall.jpg`}  alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}