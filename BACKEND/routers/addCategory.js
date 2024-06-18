const express=require('express');
const router=express.Router();
const {addCategory}=require('../controllers');
var cors = require('cors')

router.get('/',cors(),addCategory.Find);
module.exports=router;