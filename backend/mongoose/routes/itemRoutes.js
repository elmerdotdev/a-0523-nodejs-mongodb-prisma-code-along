const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

// Routes
router.get('/', itemController.getAllItems) // B
router.get('/:id', itemController.getItemById) // R
router.put('/:id', itemController.updateItem) // E
router.post('/', itemController.createItem) // A
router.delete('/:id', itemController.deleteItem) // D

module.exports = router