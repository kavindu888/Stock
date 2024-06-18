'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import sl1 from '../../../public/slider/1.jpg'
import Image from 'next/image';
const swiperAutoPlay = () => {
    
  return (
    <div ><Swiper
  
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
  
    
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide><div>
        <Image className='h-60 md:h-80 lg:h-96 '  alt="play1" src={sl1}/>
        </div></SwiperSlide>

        <SwiperSlide><div>
        <Image className='h-60 md:h-80 lg:h-96 '  alt="play2" src={sl1}/>
        </div></SwiperSlide>
    
  </Swiper></div>
  )
}

export default swiperAutoPlay