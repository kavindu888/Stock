const { response } = require("express")
const Category = require("../models/category")

module.exports={
    Find:(req,res,next)=>{
       try {
        Category.find()
        .then(response=>{
            res.json({response})
        })
       } catch (error) {
        res.json({error})
       }
    
    }
}