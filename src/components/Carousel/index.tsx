// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
// import required modules
import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import NextImage from '../NextImage';

export function Carousel() {
  return (
    <Swiper
      modules={[Pagination]}
      className="h-full"
      autoplay
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <NextImage
          src="/images/20230530_085045.jpg"
          alt="Hero-1"
          fill
          className=" object-cover"
          quality={25}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NextImage
          alt="Hero-2"
          fill
          className=" object-cover"
          quality={25}
          src="/images/20230515_141449.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NextImage
          alt="Hero-3"
          fill
          className=" object-cover"
          quality={25}
          src="/images/20230510_175502.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
