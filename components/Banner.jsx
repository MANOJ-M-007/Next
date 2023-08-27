"use client";

import React from "react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import{Autoplay} from 'swiper/core'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop
        className="h-80"
      >
        <SwiperSlide>
          <img
            src="/2.png"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/1.png"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/3.png"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
