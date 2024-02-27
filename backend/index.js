const port = 4000;
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors())

// Database connection with MongoDB 

mongoose.connect("mongodb+srv://sebastiancerveramaltos:6R4eLYt4DFcdzb2m@cluster0.uzfwls6.mongodb.net/vafri")

//API Creation 

app.get("/", (req, res) =>{
    res.send("Express App is Running")
})

//Image Storage Engine 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success:1,
        image_url:`http://localhost${port}/images/${req.file.filename}`
    })
})

//Schema for Creating Products

const Product = mongoose.model("Product", {
    id:{
        type:Number,
        require: true,
    },
    name:{
        type:String,
        require:true,
    },
    model:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    application:{
        type:String,
        require:true,
    },
    material:{
        type:String,
        require:true,
    },
    measures:{
        type: String,
        require:false,
    },
    pdf:{
        type:String,
        require:false,
    },
    date:{
        type: Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default: true,
    },
})

app.post('/addproduct', async (req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    } else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        model:req.body.model,
        image:req.body.image,
        category:req.body.category,
        application:req.body.application,
        material:req.body.material,
        measures:req.body.measures,
        pdf:req.body.pdf,
    });
    console.log(product);
    await product.save()
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for dleeting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for getting all products
app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})

app.listen(port, (error)=>{
    if (!error){
        console.log("Server Running on Port " +port)
    } else {
        console.log("Error: "+error)
    }
})
