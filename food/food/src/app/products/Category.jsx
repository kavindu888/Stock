'use client'
import React, { useEffect, useState } from 'react';
import ProgressSlide from '../(components)/ProgressSlide';
import axios from "axios";
import Link from 'next/link';
const Category = () => {
    const [categorys,setCategorysData]=useState([]);
    useEffect(()=>{

        retriveCategorys();
     
       
      },[])
      const retriveCategorys=async()=>{
     
     await  axios.get('http://localhost:3002/getCategory')
  .then(function (response) {
    // handle success
    if(response.status==200){
        console.log("methord run")
        console.log(response.data.response)
        setCategorysData(response.data.response)
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
      }

  return (
    <div className='w-[100vp] overflow-hidden'>
        {categorys.map((category, index) => (
  <div key={index}>
             
  <div className=' flex flex-row justify-between cursor-pointer items-center   py-2 px-4 md:px-12 lg:px-20'>
  <h3 className='font-extrabold sm:text-2xl text-xl w-2/3 overflow-hidden '>{category.name}</h3>
  <h4 className=' font-bold hover:scale-105'><Link href={`/${category.name}`}>see all
 <span style={{paddingLeft:2}} aria-hidden="true">&rarr;</span></Link>
  
  </h4>
</div>

<div className='py-4 px-4 md:px-12 lg:px-20'>
  <ProgressSlide category={category.name}/>
</div>
  </div>

            ))}
    
                    
          
    </div>
  )
}

export default Category