const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//routing
app.get('/about', (req, res) => {
    res.send('About page!')
  })

app.get('/contact', (req, res) => {
    res.send('Contact page')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});