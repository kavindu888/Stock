const { response } = require("express")
const Products = require("../models/products")

module.exports={
    Find:(req,res,next)=>{
        const categoryName=req.query.name
       try {
        Products.find({ category: { $regex: new RegExp(categoryName, 'i') } })
        .then(response=>{
            res.json({response})
        })
       } catch (error) {
        res.json({error})
       }
       
    
    }
}