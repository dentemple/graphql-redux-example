const express = require('express')
const path = require('path')

const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const app = express()

const URI = 'mongodb://localhost/graphql-redux-example'

mongoose.connection.once('open', () => {
  console.log('Connected to Database.')
})
mongoose.connect(
  URI,
  { useNewUrlParser: true }
)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', require('./api/routes'))

app.get('/', (req, res) => {
  res.send({ ping: 'ok', route: '/' })
})

module.exports = app
