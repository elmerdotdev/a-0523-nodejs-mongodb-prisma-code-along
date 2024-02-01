const Item = require('../models/itemModel')

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get item by id
const getItemById = async (req, res) => {
  const itemId = req.params.id

  try {
    const item = await Item.findById(itemId)
    if (!item) {
      return res.status(404).json({ message: 'Item not found' })
    }
    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update item by id
const updateItem = async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body

  try {
    const item = await Item.findById(id)
    if (!item) return res.status(404).json({ message: 'Item not found!' })
    if (name) item.name = name
    if (description) item.description = description

    const updatedItem = await item.save()
    res.json(updatedItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Add item
const createItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description
    })
  
    const addedItem = await newItem.save()
    res.json(addedItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete item by id
const deleteItem = async (req, res) => {
  const { id } = req.params

  try {
    const item = await Item.findById(id)
    if (!item) return res.status(404).json({ message: "Item not found!" })

    const deletedItem = await item.deleteOne()
    res.json(deletedItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
}