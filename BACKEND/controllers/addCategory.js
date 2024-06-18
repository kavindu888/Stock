const Category=require('../models/category');
module.exports={
    Find:(req,res,next)=>{
     
        console.log(req.query.categoryTitle)

        const categoryTitleData=req.query.categoryTitle;
        try {
            const category=new Category({
                name:categoryTitleData
            })
    
            category.save()
            .then(response=>{
                res.json({response});
                
            })
          } catch (error) {
            res.json({error})
          }
    
    }
}