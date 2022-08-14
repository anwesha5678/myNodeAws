const express = require('express')
const app = express()
require('dotenv')
let port = process.env.PORT || 3900


app.get('/', async (req, res) => {
    res.send('GET request to homepage')
})




app.listen(() => {
    console.log(`Server Listen To The Port:${port}`)
})