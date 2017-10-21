const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/atendees', (req, res) => {
  const atendeesList = fs.readFileSync(__dirname + '/data/data.json')
  res.json(JSON.parse(atendeesList))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
