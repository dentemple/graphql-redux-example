import React, { Component } from 'react'
import query from '../utils/query'

class MessagesFetch extends Component {
  state = {
    isFetching: false,
    messages: [],
    error: null
  }

  handleClear = () => {
    this.setState({ messages: [] })
  }

  handleFetch = () => {
    this.setState({ isFetching: true, error: null }, () => {
      query('/api/graphql', '{messages {id author description}}')
        .then(res => res.json())
        .then(json => {
          this.setState({ messages: json.data.messages, isFetching: false })
        })
        .catch(error => {
          this.setState({ error, isFetching: false })
        })
    })
  }

  renderMessages = messages => {
    return messages.map((message, i) => (
      <li key={i} style={{ listStyle: 'none' }}>
        <pre>
          <code>{JSON.stringify(message, null, 2)}</code>
        </pre>
      </li>
    ))
  }

  render() {
    const { messages, isFetching, error } = this.state

    return (
      <div>
        <button onClick={this.handleFetch}>Get Messages</button>
        <button onClick={this.handleClear}>Clear Messages</button>

        <br />
        <p>
          <em>
            <small>
              Fetch Status: &nbsp;
              {isFetching.toString()}
            </small>
          </em>
        </p>
        {error ? (
          <pre>
            <code>{JSON.stringify(error, null, 2)}</code>
          </pre>
        ) : (
          <pre>
            <code>{JSON.stringify(messages, null, 2)}</code>
          </pre>
        )}
      </div>
    )
  }
}

export default MessagesFetch
