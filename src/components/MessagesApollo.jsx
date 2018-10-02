import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    messages {
      id
      author
      description
    }
  }
`

const MessagesApollo = () => (
  <div>
    <p>Messages w/ Apollo</p>
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.messages.map((message, i) => (
          <pre key={i}>{JSON.stringify(message, null, 2)}</pre>
        ))
      }}
    </Query>
  </div>
)

export default MessagesApollo
