import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cvs', (req, res) => {
    res.send('Hello cvs!')
  })

app.get('/yaml', (req, res) => {
    res.send('Hello yaml!')
  })  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})