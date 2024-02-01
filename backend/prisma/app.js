require('dotenv').config()

const express = require('express')

// Import routes
const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Prisma backend working!')
})

// Routes middleware
app.use('/products', productRoutes)

const port = process.env.PORT || 3010
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})