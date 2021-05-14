const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Tanhust1202",
    database:"companysupplyproduct"
})

module.exports = db