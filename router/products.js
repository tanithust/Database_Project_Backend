const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require('../config/db')
const app = express()

app.use(cors())

router.get('/', (req, res) => {
  db.query('SELECT * FROM product', (err, result) => {
    res.send(result)
  })
})
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.query(`SELECT * FROM product WHERE ProductID = ${id}`, (err, result) => {
    res.send(result)
  })
})

module.exports = router
