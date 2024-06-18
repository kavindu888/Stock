'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import axios from "axios";

const ProgressSlide = (props) => {
 const [slideCount,setSlideCount]=useState(5);
 const [productData,setProductData]=useState([]);
 

  useEffect( ()=>{
   
    if(screen.width<640){
        setSlideCount(2);
    }else if(screen.width<768){
        setSlideCount(3);
    }else if(screen.width<1024){
        setSlideCount(4);
    }
   
    let categoryName=props.category;

   products(categoryName);



    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

const products=async(category)=>{
  console.log("productDatagvbbc");

  await axios.get(`http://localhost:3002/getCategoryProducts?name=${category}`)
  .then(function (response) {
    // handle success
    if(response.status==200){
      setProductData(response.data.response)
 
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


}


  return (
    <Swiper
    style={{
      "--swiper-pagination-color": "#2C7865",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "0.5",
      "--swiper-pagination-bullet-size": "10px",
      "--swiper-pagination-bullet-horizontal-gap": "4px"
    }}
    slidesPerView={slideCount}
    spaceBetween={30}
    freeMode={true}
    pagination={{
        clickable: true,
      }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
   {productData.slice(0, 10).map((category, index) => (

        <SwiperSlide key={index} style={{flex:"row",justifyContent:'center',textAlign:'center',maxHeight:290,minHeight:290}}>
        <div className='border-solid border-2 shadow-sm px-0 rounded-xl overflow-hidden cursor-pointer'>
          <div className='h-32 overflow-hidden'>
          <Image width={1000} height={100} style={{borderTopRadius:10,overflow:'hidden'}} alt={index} src={category.image} />   
          </div>
     
        <h3 style={{marginTop:5,fontWeight:700}}> {category.title}</h3>
        <p style={{marginTop:5,fontWeight:400,textAlign:'justify',paddingLeft:4,paddingRight:4}}>{ category.discption.length > 55 ? `${category.discption.slice(0, 52)}...` : category.discption}</p>
        </div>
        </SwiperSlide>

   ))}




        
       


     





  </Swiper>
  )
}

export default ProgressSlide