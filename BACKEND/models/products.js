const mongoose=require('mongoose');
const Schama=mongoose.Schema;

const productsSchama=new Schama({
    category:String,
    title:String,
    image:String,
    discption:String,
    packageDtl:String
})

const Products=mongoose.model('Products',productsSchama);
module.exports=Products;