const express=require('express');
const router=express.Router();
const {getCategory}=require('../controllers');
var cors = require('cors')

router.get('/',cors(),getCategory.Find);
module.exports=router;