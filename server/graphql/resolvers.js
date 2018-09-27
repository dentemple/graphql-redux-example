const messages = require('./data')

const root = {
  message: function({ id }) {
    return messages.filter(message => message.id == id)[0]
  },
  messages: function({ author }) {
    if (author) return messages.filter(message => message.author === author)
    return messages
  }
}

module.exports = root
