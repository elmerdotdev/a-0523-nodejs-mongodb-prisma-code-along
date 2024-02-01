const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// Routes
router.get('/', productController.getProducts) // B
router.get('/:id', productController.getProductById) // R
router.put('/:id', productController.updateProduct) // E
router.post('/', productController.createProduct) // A
router.delete('/:id', productController.deleteProduct) // D

module.exports = router