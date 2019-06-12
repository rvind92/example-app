const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
  app.set('views', `/${__dirname}/../views`)
  app.set('view engine', 'ejs')
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  return app
}
