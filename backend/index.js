require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

// Cargar las credenciales del archivo JSON
const serviceAccount = require('./serviceAccountKey.json');

// Inicializar Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Configuración de AWS S3
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
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
    },
  }),
});

const multipleUploads = upload.fields([
  { name: 'product', maxCount: 1 },
  { name: 'productPDF', maxCount: 1 },
]);

// Endpoint para subir archivos a AWS S3
app.post('/upload', multipleUploads, (req, res) => {
  const files = req.files;
  let responses = [];

  if (!files || Object.keys(files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  Object.keys(files).forEach((field) => {
    files[field].forEach((file) => {
      responses.push({ field: field, url: file.location });
    });
  });

  res.json({ success: 1, files: responses });
});

// Endpoint para añadir un producto a Firestore
app.post('/addproduct', async (req, res) => {
  const { id, fmsi, brand, category, application, formula, measures, image, pdf } = req.body;
  try {
    const productRef = db.collection('products').doc(id.toString());
    await productRef.set({
      id,
      fmsi,
      brand,
      category,
      application,
      formula,
      measures,
      image,
      pdf,
      available: true,
      date: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.json({ success: true, message: 'Producto añadido correctamente' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ success: false, message: 'Error al añadir el producto', error: error.message });
  }
});

// Endpoint para eliminar un producto de Firestore
app.post('/removeproduct', async (req, res) => {
  try {
    const productRef = db.collection('products').doc(req.body.id.toString());
    await productRef.delete();
    res.json({
      success: true,
      message: 'Producto eliminado correctamente',
    });
  } catch (error) {
    console.error('Error removing product:', error);
    res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
  }
});

// Endpoint para obtener todos los productos con opciones de ordenación
app.get('/allproducts', async (req, res) => {
  try {
    const sortParam = req.query.sort;
    let query = db.collection('products');

    switch (sortParam) {
      case 'newest':
        query = query.orderBy('id', 'desc');
        break;
      case 'oldest':
        query = query.orderBy('id', 'asc');
        break;
      case 'alphabetical_asc':
        query = query.orderBy('application', 'asc');
        break;
      case 'alphabetical_desc':
        query = query.orderBy('application', 'desc');
        break;
    }

    const snapshot = await query.get();
    const products = snapshot.docs.map((doc) => doc.data());
    res.json(products);
  } catch (error) {
    console.error('Error fetching all products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint para obtener los productos más recientes
app.get('/nuevo', async (req, res) => {
  try {
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();
    const products = snapshot.docs.map((doc) => doc.data());

    let nuevo = products.slice(1).slice(-8);
    res.json(nuevo);
  } catch (error) {
    console.error('Error fetching new products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint para obtener los primeros 4 productos de la categoría "pasta"
app.get('/pastaP', async (req, res) => {
  try {
    const pastaQuery = db.collection('products').where('category', '==', 'pasta');
    const snapshot = await pastaQuery.get();
    const products = snapshot.docs.map((doc) => doc.data());

    let pastaP = products.slice(0, 4);
    res.json(pastaP);
  } catch (error) {
    console.error('Error fetching pasta products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint para obtener productos relacionados
app.get('/related', async (req, res) => {
  const productId = req.query.productId;
  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }

  try {
    const currentProductRef = db.collection('products').doc(productId.toString());
    const currentProductDoc = await currentProductRef.get();

    if (!currentProductDoc.exists) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const currentProduct = currentProductDoc.data();
    const relatedQuery = db.collection('products')
      .where('application', '==', currentProduct.application)
      .where('id', '!=', currentProduct.id)
      .limit(4);

    const relatedSnapshot = await relatedQuery.get();
    const relatedProducts = relatedSnapshot.docs.map((doc) => doc.data());

    res.json(relatedProducts);
  } catch (error) {
    console.error('Error fetching related products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Inicializar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
