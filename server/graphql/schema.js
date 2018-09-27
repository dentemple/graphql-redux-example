const { buildSchema } = require('graphql')

const schema = buildSchema(` 
  type Query {
    message(id: Int!): Message 
    messages(author: String): [Message]
  }

  type Message {
    id: Int
    author: String
    description: String
  }
`)

module.exports = schema
