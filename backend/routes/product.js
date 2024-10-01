const express = require('express')
const router = express.Router();


const { getProducts, newProduct, getSingleProduct,updateProduct,deleteProduct } = require('../controllers/product')

// All Product
router.route('/products').get(getProducts);
// Creating new product
router.route('/admin/products/new').post(newProduct);
// Updating Products
router.route('/admin/products/:id').put(updateProduct);
// Deleting Product
router.route('/admin/products/:id').put(updateProduct).delete(deleteProduct);

// Getting the single product
router.route('/products/:id').get(getSingleProduct);


module.exports = router;