import React, { Component } from 'react'
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

class MessagesApollo extends Component {
  state = {
    fetchData: false
  }
  handleQuery = () => {
    this.setState({
      fetchData: true
    })
  }
  handleClear = () => {
    this.setState({
      fetchData: false
    })
  }

  render() {
    const sectionProps = {
      handleQuery: this.handleQuery,
      handleClear: this.handleClear
    }

    return (
      <div>
        <p>Messages w/ Apollo</p>
        <SectionContainer {...sectionProps}>
          {this.state.fetchData ? (
            <Query query={query}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(</p>

                return data.messages.map((message, i) => (
                  <pre key={i}>{JSON.stringify(message, null, 2)}</pre>
                ))
              }}
            </Query>
          ) : (
            <div />
          )}
        </SectionContainer>
      </div>
    )
  }
}

const SectionContainer = ({ handleQuery, handleClear, children }) => (
  <section>
    <button
      onClick={e => {
        handleQuery(e)
      }}
    >
      Get Messages
    </button>
    <button
      onClick={() => {
        handleClear()
      }}
    >
      Clear Messages
    </button>
    <br />
    {children}
  </section>
)

export default MessagesApollo
