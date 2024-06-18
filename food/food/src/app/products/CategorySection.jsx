'use client'
import Image from 'next/image'
import React from 'react'
import fruit from '../../../public/icons/fruit.png';
import veggie from '../../../public/icons/veggie.png';
import tea from '../../../public/icons/tea.png';
import heldi from '../../../public/icons/heldi.png';
import other from '../../../public/icons/other.png';
import Link from 'next/link';
const CategorySection = () => {
  return (
    <div className="w-[100vp]  lg:px-4   pt-10 gap-x-6 flex flex-row flex-wrap justify-center md:justify-around px-2 gap-2">
<Link href={`/fruit`}>
    <div className=" flex cursor-pointer justify-center items-center flex-col  border-b-4 border-b-white hover:border-b-amber-800  hover:scale-105" >
      <div className="w-20 h-20 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-14 h-14 " alt="fruit icon" src={fruit} /></div>
      <span className="text-lg  md:text-xl text-green-600 font-semibold">Fruit </span>
    </div> 
    </Link>

    <Link href={`/Vegitable`}>
    <div className=" flex justify-center cursor-pointer items-center   flex-col   border-b-4 border-b-white hover:border-b-amber-800  hover:scale-105" >
      <div className="w-20 h-20 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-14 h-14 " alt="fruit icon" src={veggie} /></div>
      <span className="text-lg  md:text-xl text-green-600 font-semibold">Vegitable </span>
    </div>
    </Link>

    <Link href={`/Tea`}>
    <div className="flex justify-center cursor-pointer items-center    flex-col   border-b-4 border-b-white hover:border-b-amber-800  hover:scale-105" >
      <div className="w-20 h-20 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-14 h-14 " alt="fruit icon" src={tea} /></div>
      <span className="text-lg  md:text-xl text-green-600 font-semibold">Tea </span>
    </div>
    </Link>

    <Link href={`/Healthy Foods`}>
    <div className=" flex justify-center cursor-pointer items-center     flex-col     border-b-4 border-b-white hover:border-b-amber-800  hover:scale-105" >
      <div className="w-20 h-20 bg-green-100 rounded-full flex justify-center items-center   border-solid border-2 border-green-600" ><Image className="w-14 h-14 " alt="fruit icon" src={heldi} /></div>
      <span className="text-lg  md:text-xl text-green-600 font-semibold">Healthy Foods </span>
    </div>
    </Link>

    <Link href={`/other`}>
    <div className="  flex justify-center cursor-pointer items-center   flex-col   border-b-4 border-b-white hover:border-b-amber-800  hover:scale-105" >
      <div className="w-20 h-20 bg-green-100 rounded-full flex justify-center items-center   border-solid border-2 border-green-600" ><Image className="w-14 h-14 " alt="fruit icon" src={other} /></div>
      <span className="text-lg  md:text-xl text-green-600 font-semibold">Other</span>
    </div>
    </Link>
    </div>
  )
}

export default CategorySection