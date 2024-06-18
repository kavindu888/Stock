/* eslint-disable jsx-a11y/alt-text */

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import SwiperAutoPlay from '../(components)/SwiperAutoPlay';
import Category from './Category';
import CategorySection from './CategorySection';
const page = () => {

  
      
  return (
    <div>
   

<div>
    <SwiperAutoPlay />
</div>

<CategorySection/>


<div className='pt-10 mt-2  border-t-2'>
<Category/>
</div>

    </div>
  )
}

export default page