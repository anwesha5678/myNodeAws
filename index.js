const express = require('express')
const app = express()
require('dotenv').config()
let port = process.env.PORT
//const database = require('./database.js')
const mysql = require('mysql2');
const { getNotes, getNote, createNote } = require('./database.js')
// const pool = mysql.createPool({
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   host: process.env.MYSQL_HOST

// })

app.use(express.json())
app.get("/notes", async (req, res) => {
  const notes = await getNotes()
  res.send(notes)
})

app.get("/notes/:id", async (req, res) => {
  const id = req.params.id
  const note = await getNote(id)
  res.send(note)
})

app.post("/notes", async (req, res) => {
  const { title, contents } = req.body
  const note = await createNote(title, contents)
  res.status(201).send(note)
})







app.get('/', async (req, res) => {
  res.send('Hello World')
})


app.listen(port, function () {
  console.log(`listening on: ${port}`)
})