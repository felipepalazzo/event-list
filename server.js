const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/attendees', (req, res) => {
  const attendeesList = fs.readFileSync(__dirname + '/data/data.json')
  res.json(JSON.parse(attendeesList).guestList)
})

app.get('/attendees/:id', (req, res) => {
  const attendeesList = fs.readFileSync(__dirname + '/data/data.json')
  const list = JSON.parse(attendeesList).guestList
  const guest = list.filter((guest) => guest.id === +req.params.id)[0]
  res.json(guest)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
