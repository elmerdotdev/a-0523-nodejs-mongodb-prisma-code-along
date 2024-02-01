const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get product by id
const getProductById = async (req, res) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({ where: { id } })
    if (!product) return res.status(404).json({ message: "Product not found!" })
    res.json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create product
const createProduct = async (req, res) => {
  const { name, description } = req.body
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description
      }
    })
    res.json(newProduct)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update product by id
const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description
      }
    })
    res.json(updatedProduct)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete product by id
const deleteProduct = async (req, res) => {
  const { id } = req.params

  try {
    await prisma.product.delete({ where: { id } })
    res.json({ message: "Product deleted successfully!" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct
}