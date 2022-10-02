const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/timestamp', (req, res) => {
  var date = new Date();
  res.send(date.toISOString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})