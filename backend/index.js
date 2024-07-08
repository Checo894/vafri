require('dotenv').config();

const port = 4000;
const express = require("express");
const AWS = require("aws-sdk");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const multerS3 = require('multer-s3');
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//API Creation 
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Configura tus credenciales y región de AWS S3
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

// Configuración de multer para cargar directamente a S3
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'vafri',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const fileName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
            cb(null, fileName);
        }
    })
});

const multipleUploads = upload.fields([
    { name: 'product', maxCount: 1 },
    { name: 'productPDF', maxCount: 1 }
]);

// Creating upload endpoint for images
app.post("/upload", multipleUploads, (req, res) => {
    const files = req.files;
    let responses = [];

    if (!files || Object.keys(files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    Object.keys(files).forEach(field => {
        files[field].forEach(file => {
            responses.push({ field: field, url: file.location });
        });
    });

    res.json({ success: 1, files: responses });
});

// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        require: true,
    },
    fmsi: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    formula: {
        type: String,
        require: true,
    },
    measures: {
        type: String,
        require: false,
    },
    application: {
        type: String,
        require: false,
    },
    category: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    pdf: {
        type: String,
        require: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

app.post('/addproduct', async (req, res) => {
    const { id, fmsi, brand, category, application, formula, measures, image, pdf } = req.body;
    try {
        const product = new Product({
            id,
            fmsi,
            brand,
            category,
            application,
            formula,
            measures,
            image,  // URL de la imagen de S3
            pdf     // URL del PDF de S3
        });
        await product.save();
        res.json({ success: true, message: "Producto añadido correctamente", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error al añadir el producto" });
    }
});

// Creating API for deleting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
        success: true,
        fmsi: req.body.fmsi,
    });
});

// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
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
});

// Creating Endpoint for Nuevo
app.get('/nuevo', async (req, res) => {
    let products = await Product.find();
    let nuevo = products.slice(1).slice(-8);
    console.log("Nuevo Fetched");
    res.send(nuevo);
});

// Creating Endpoint for Pasta products 
app.get('/pastaP', async (req, res) => {
    let products = await Product.find({ category: "pasta" });
    let pastaP = products.slice(0, 4);
    console.log("Pasta Fetched");
    res.send(pastaP);
});

// Creating Endpoint for Related products
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

// Middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});
