const mongoose = require('mongoose')

const Schema = mongoose.Schema

const model = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Users', model)
