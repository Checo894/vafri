require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://checo894.github.io'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Agregar esto si necesitas enviar cookies o autenticación HTTP
};

app.use(cors(corsOptions));

// Middleware para desactivar CORS (solo para pruebas)
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Configuración de AWS S3
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
    bucket: 'vafri-nuevo/images',
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
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  fmsi: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  formula: {
    type: String,
    required: true,
  },
  measures: {
    type: String,
    required: false,
  },
  application: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: false,
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

const Product = mongoose.model('Product', productSchema);

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
      image,
      pdf
    });
    await product.save();
    res.json({ success: true, message: "Producto añadido correctamente", product });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ success: false, message: "Error al añadir el producto", error: error.message });
  }
});

app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      fmsi: req.body.fmsi,
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Error al eliminar el producto" });
  }
});

app.get('/allproducts', async (req, res) => {
  try {
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
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/nuevo', async (req, res) => {
  try {
    let products = await Product.find();
    let nuevo = products.slice(1).slice(-8);
    console.log("Nuevo Fetched");
    res.send(nuevo);
  } catch (error) {
    console.error("Error fetching new products:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/pastaP', async (req, res) => {
  try {
    let products = await Product.find({ category: "pasta" });
    let pastaP = products.slice(0, 4);
    console.log("Pasta Fetched");
    res.send(pastaP);
  } catch (error) {
    console.error("Error fetching pasta products:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/related', async (req, res) => {
  const productId = req.query.productId;
  if (!productId) {
    return res.status(400).json({ error: "productId is required" });
  }

  try {
    const currentProduct = await Product.findOne({ id: productId });
    if (!currentProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const relatedProducts = await Product.find({
      application: currentProduct.application,
      id: { $ne: currentProduct.id }
    }).limit(4);

    res.json(relatedProducts);
  } catch (error) {
    console.error("Error fetching related products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

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

