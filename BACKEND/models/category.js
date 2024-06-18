const mongoose=require('mongoose');
const Schama=mongoose.Schema;

const categorySchama=new Schama({
    name:String
})

const Category=mongoose.model('Category',categorySchama);
module.exports=Category;