const express = require('express')
const app = express()
const port = 5000

app.get('/fast', (req, res) => {
  setTimeout(() => res.send('fast'), 50)
})

app.get('/slow', (req, res) => {
  setTimeout(() => res.send('slow'), 900)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})