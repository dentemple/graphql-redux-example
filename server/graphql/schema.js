const { buildSchema } = require('graphql')

const schema = buildSchema(` 
  type Message {
    id: Int!
    author: String
    description: String
  }

  type Query {
    message(id: Int): Message 
    messages(author: String): [Message]
  }
  
  type Mutation {
    createMessage(id: Int!, author: String, description: String): Message 
    updateMessage(id: Int!, author: String, description: String): Message
  }
`)

module.exports = schema
