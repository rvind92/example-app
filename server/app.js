const express = require('express')
const app = require('./setup/setup-express')(express())
const PORT = process.env.PORT || 3000

app.use(express.static('build'))
app.get('/*', (request, response) => {
  response.sendFile('index.html', { root: './build' })
})

app.listen(PORT, () => console.log(`App running at ${PORT}!`))
