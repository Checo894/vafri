require('dotenv').config();
const admin = require('firebase-admin');
const path = require('path');

// Inicializar Firebase Admin SDK
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const serviceAccount = require(path.resolve(serviceAccountPath));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Requerir el archivo JS que contiene los datos
const products = require('../client/src/Components/Assets/vafri-products-new.json');

// Función para importar productos a Firestore
async function importProducts() {
  try {
    const batch = db.batch(); // Usar batch para eficiencia

    products.forEach((product) => {
      const productRef = db.collection('products').doc(product.id.toString());
      batch.set(productRef, {
        id: product.id,
        fmsi: product.fmsi,
        brand: product.brand,
        formula: product.formula,
        measures: product.measures,
        application: product.application,
        category: product.category,
        image: product.image,
        pdf: product.pdf,
        available: product.available || true,
        date: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    await batch.commit();
    console.log('Todos los productos han sido importados correctamente.');
  } catch (error) {
    console.error('Error al importar productos: ', error);
  }
}

// Ejecutar la función de importación
importProducts();
