const express = require('express')
const app = express()
require('dotenv').config()
let port = process.env.PORT
//const database = require('./database.js')
const mysql = require('mysql2');

const pool = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST

})









app.get('/', async (req, res) => {
  res.send('Hello World')
})


app.listen(port, function () {
  console.log(`listening on: ${port}`)
})