const messages = require('./data')

const root = {
  message: function({ id }) {
    return messages.filter(message => message.id == id)[0]
  },

  messages: function({ author }) {
    if (author) return messages.filter(message => message.author === author)
    return messages
  },

  createMessage: function({ id, author, description }) {
    let target = messages.find(element => element.id === id)
    if (target) {
      target = { id, author, description }
      return target
    }
    target = { id, author, description }
    messages.push(target)
    return target
  }
}

module.exports = root
