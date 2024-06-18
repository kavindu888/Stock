const controllers={}
controllers.getCategory=require('./getCategory');
controllers.addCategory=require('./addCategory');
controllers.getCategoryProducts=require('./getCategoryProducts');

module.exports=controllers;