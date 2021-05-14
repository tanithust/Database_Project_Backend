const express = require('express')
const cors = require('cors')
const path = require('path')
const products = require('./router/products')
const app = express()
const PORT = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.use('/products', products)
app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`)
})
