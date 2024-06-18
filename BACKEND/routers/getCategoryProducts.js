const express=require('express');
const router=express.Router();
const {getCategoryProducts}=require('../controllers');
var cors = require('cors')

router.get('/',cors(),getCategoryProducts.Find);
module.exports=router;
