const express = require('express')
const app = express()
require('dotenv')
let port = process.env.PORT || 8080









app.get('/', async(req, res)=> {
    res.send('Hello World')
  })


  app.listen(port, function() {
    console.log(`listening on: ${port}`)
  })