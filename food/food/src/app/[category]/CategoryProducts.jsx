'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import RecipeReviewCard from '../(components)/RecipeReviewCard'
const CategoryProducts = (props) => {
    const [productData,setProductData]=useState([]);
    useEffect(()=>{
    const categoryName=props.name
    //To convert Lower Case
    products(categoryName)
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
    <div>
        <div className='flex flex-wrap gap-8 justify-center items-center'>

    




           {productData.slice(0, 10).map((category, index) => (
            <div className='cursor-pointer' key={index}>

        <RecipeReviewCard key={index} title={category.title} src={category.image} discription={category.discption} packageDtl={category.packageDtl} />
        </div>
           ))}
         
    </div>
    </div>

  )
}

export default CategoryProducts