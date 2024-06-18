import Image from 'next/image'
import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ci1 from '../../../public/category/1.jpg'
import RecipeReviewCard from '../(components)/RecipeReviewCard';
import CategoryProducts from './CategoryProducts';
import SCrollDiolog from '../(components)/ScrollDialog';
const page = ({params}) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
const removeSpace=(encodedString)=>{
    return(
      decodeURIComponent(encodedString)
    )
}

const controll=(sendString)=>{
 const noSpace=   removeSpace(sendString);
 const capital=capitalizeFirstLetter(noSpace);

 return(
    capital
 )
}
    
    return (
        <div className='pt-24'>
            <div>
                <h1 className='text-center text-xl font-extrabold md:text-2xl lg:text-4xl'>{ controll(params.category)}</h1>
            </div>
<br/>
<br/>
<div className=''>
<CategoryProducts name={params.category}/>
</div>


        
          

        </div>
    )
}

export default page