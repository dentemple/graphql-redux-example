const { buildSchema } = require('graphql')

const schema = buildSchema(` 
  type Message {
    id: Int!
    author: String
    description: String
  }

  input MessageInput {
    author: String
    description: String
  }

  type Query {
    message(id: Int!): Message 
    messages(author: String): [Message]
  }
  
  type Mutation {
    createMessage(input: MessageInput): Message 
    updateMessage(id: Int!, input: MessageInput): Message
  }
`)

module.exports = schema
