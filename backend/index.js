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

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'upload/images')
    },
    filename:(req,file,cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})


const upload = multer({storage:storage})


var multipleUploads = upload.fields([
    { name: 'product', maxCount: 1 }, 
    { name: 'productPDF', maxCount: 1 }
])


//Creating upload endpoint for images

app.use('/images', express.static('upload/images'))
app.post("/upload", multipleUploads, (req, res) => {
    let imageURL = "";
    let pdfURL = "";
    if (req.files) {
        // Access uploaded image details (if present)
        if (req.files.product) {
          imageURL = `http://localhost:${port}/images/${req.files.product[0].filename}`;
        }
    
        // Access uploaded PDF details (if present)
        if (req.files.productPDF) {
          pdfURL = `http://localhost:${port}/images/${req.files.productPDF[0].filename}`; // Adjust path if PDFs are stored elsewhere
        }
      }
    
      // Respond with image and PDF URLs (if uploaded)
      res.json({
        success: 1,
        imageURL: imageURL,
        pdfURL: pdfURL,
      });
    })


//Schema for Creating Products

const Product = mongoose.model("Product", {
    id:{
        type:Number,
        require: true,
    },
    fmsi:{
        type:String,
        require:true,
    },
    brand:{
        type:String,
        require:true,
    },
    formula:{
        type:String,
        require:true,
    },
    measures:{
        type: String,
        require:false,
    },
    application:{
        type:String,
        require:false,
    },
    category:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
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
        fmsi:req.body.fmsi,
        brand:req.body.brand,
        image:req.body.image,
        category:req.body.category,
        application:req.body.application,
        formula:req.body.formula,
        measures:req.body.measures,
        pdf:req.body.pdf,
    });
    console.log(product);
    await product.save()
    console.log("Saved");
    res.json({
        success:true,
        fmsi:req.body.fmsi,
    })
})

//Creating API for dleeting products

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        fmsi:req.body.fmsi,
    })
})

//Creating API for getting all products

app.get('/allproducts', async (req, res)=>{
    const sortParam = req.query.sort;
    let sortOptions = {};

    switch (sortParam) {
        case 'newest':
            sortOptions = { id: -1 };
            break;
        case 'oldest':
            sortOptions = { id: 1 };
            break;
        case 'alphabetical_asc':
            sortOptions = { application: 1 };
            break;
        case 'alphabetical_desc':
            sortOptions = { application: -1 };
            break;
    }

    const products = await Product.find({}).sort(sortOptions);
    res.send(products);
})

//Creating Endpoint for Nuevo
app.get('/nuevo', async (req, res)=>{
    let products = await Product.find();
    let nuevo = products.slice(1).slice(-8);
    console.log("Nuevo Fetched");
    res.send(nuevo);
})

//Creating Endpoint for Pasta products 
app.get('/pastaP', async (req, res)=>{
    let products = await Product.find({category:"pasta"});
    let pastaP = products.slice(0,4);
    console.log("Pasta Fetched");
    res.send(pastaP);
})

//Creating Endpoint for Related products


app.get('/related', async (req, res) => {
    const productId = req.query.productId;
    if (!productId) {
        return res.status(400).json({ error: "productId is required" });
    }

    try {
        // Buscar el producto actual para obtener su 'application'
        const currentProduct = await Product.findOne({ id: productId });
        if (!currentProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Buscar productos con la misma 'application', excluyendo el producto actual
        const relatedProducts = await Product.find({
            application: currentProduct.application,
            id: { $ne: currentProduct.id }
        }).limit(4);  // Limita a 4 productos relacionados

        res.json(relatedProducts);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});




app.listen(port, (error)=>{
    if (!error){
        console.log("Server Running on Port " +port)
    } else {
        console.log("Error: "+error)
    }
})

