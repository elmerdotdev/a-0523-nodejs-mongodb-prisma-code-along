require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Import routes
const itemRoutes = require('./routes/itemRoutes')

const app = express()
app.use(express.json())
app.use(cors())

// Connect to MongoDB Atlas
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Connection error: ', err))

app.get('/', (req, res) => {
  res.send('Backend is running!')
})

// Routes middleware
app.use('/items', itemRoutes)

const port = process.env.PORT || 3009

app.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})