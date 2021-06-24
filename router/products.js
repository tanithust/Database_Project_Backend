const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require('../config/db')
const app = express()

app.use(cors())

router.get('/', (req, res) => {
  db.query(
    'select product.product_id, producttype.type_name, product.product_name, product.price, product.description, product.image, product.rating, product.quantity, supplier.supplier_name from (((product inner join supplierproduct on  product.product_id = supplierproduct.product_id) inner join supplier on supplier.supplier_id = supplierproduct.supplier_id) inner join producttype on producttype.type_id = product.type_id); ',
    (err, result) => {
      res.status(200).send(result)
    }
  )
})
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.query(
    `select product.product_id, producttype.type_name, product.product_name, product.price, product.description, product.image, product.rating, product.quantity, supplier.supplier_name from (((product 
				inner join supplierproduct on  product.product_id = supplierproduct.product_id) 
        inner join supplier on supplier.supplier_id = supplierproduct.supplier_id) 
        inner join producttype on producttype.type_id = product.type_id) where product.product_id = ${Number(
          id
        )};`,
    (err, result) => {
      res.status(200).send(result)
    }
  )
})

module.exports = router
