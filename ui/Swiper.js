"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Image by https://www.freepik.com/free-vector/flat-design-clothing-store-logo-design_28815161.htm#query=clothes%20store%20logo&position=38&from_view=search&track=sph

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import SwiperStyles from "../styles/Swiper.module.css";
import slide1 from "../images/desktop/slide1.png";
import slide2 from "../images/desktop/slide2.png";
import slide4 from "../images/desktop/slide5.png";

// import required modules

const SwiperComponent = () => {
  return (
    <div className={SwiperStyles.html}>
      <div className={SwiperStyles.body}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={SwiperStyles.swiper}
        >
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={slide2} alt="/" width="auto" height="600"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={slide1} alt="/" width="auto" height="600"></Image>
          </SwiperSlide>
          <SwiperSlide className={SwiperStyles.swiper_slide}>
            <Image src={slide4} alt="/" width="auto" height="600"></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
