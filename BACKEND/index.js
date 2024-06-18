const express =require('express');
const app=express();
require('dotenv').config()
const getCategory=require('./routers/getCategorys');
const addCategory=require('./routers/addCategory');
const { default: mongoose } = require('mongoose');

const Products=require('./models/products')
const uploadImage=require('./controllers/uploardImage')
const getCategoryProducts =require('./routers/getCategoryProducts')


var cors = require('cors')
var bodyParser = require('body-parser')
const uri=process.env.SECRET_KEY;

app.use('/getCategory',getCategory);
app.use('/addCategory',addCategory);
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use('/getCategoryProducts',getCategoryProducts)
console.log(uri)

const connect=async()=>{
    try {
        mongoose.connect(uri);
        console.log('mongo db connected');
    } catch (error) {
        console.group("error",error);
    }
}
connect()

  app.post("/uploadImage", (req, res) => {
    uploadImage(req.body.image)
      .then((url) => {
        const {category,title,discription,packge}=req.body;
        console.log(category)
        console.log(title)
        console.log(discription)
        console.log(packge)
        const imageName=url;
       
        const products=new Products({
          category:category,
          title:title,
          discption:discription,
          packageDtl:packge,
          image:imageName
      });
    
      products.save()
      .then(response=>{
          res.json({response});
          
      })
      
      })
      .catch((err) => res.status(500).send(err));
  });



app.listen(3002);

