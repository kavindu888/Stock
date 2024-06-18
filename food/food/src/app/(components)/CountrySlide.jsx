'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

import fl1 from '../../../public/country/1.jpg';
import fl2 from '../../../public/country/2.jpg';
import fl3 from '../../../public/country/3.jpg';
import fl4 from '../../../public/country/4.jpg';
import fl5 from '../../../public/country/5.jpg';
import fl6 from '../../../public/country/6.jpg';
import fl7 from '../../../public/country/7.jpg';
import fl8 from '../../../public/country/8.jpg';
const CountrySlide = () => {
 const [slideCount,setSlideCount]=useState(5);

  useEffect(()=>{
    console.log(screen.width)
    if(screen.width<640){
        setSlideCount(2);
    }else if(screen.width<768){
        setSlideCount(3);
    }else if(screen.width<1024){
        setSlideCount(4);
    }
  })
  return (
    <Swiper
    slidesPerView={slideCount}
    spaceBetween={30}
    freeMode={true}
   
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl1' src={fl1} /><h3 style={{marginTop:10,fontWeight:700,color:'#16a34a'}}> Sri Lanka</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl2' src={fl2} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> India</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl3' src={fl3} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> Melayasia</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl4' src={fl4} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> China</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl5' src={fl5} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> Japan</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl6' src={fl6} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> Norway</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl7' src={fl7} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> England</h3></SwiperSlide>
    <SwiperSlide style={{flex:"row",justifyContent:'center',textAlign:'center'}}><Image style={{border:'solid',borderWidth:2,borderRadius:5,overflow:'hidden',borderColor:'white'}} alt='fl8' src={fl8} /><h3 style={{paddingTop:10,fontWeight:700,color:'#16a34a'}}> US</h3></SwiperSlide>

 


  </Swiper>
  )
}

export default CountrySlide