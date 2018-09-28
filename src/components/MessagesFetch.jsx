import React, { Component } from 'react'

class MessagesFetch extends Component {
  state = {
    didMount: false,
    isFetching: false,
    messages: []
  }

  componentDidMount() {
    this.setState({ didMount: true })
  }

  handleClear = () => {
    this.setState({ messages: [] })
    console.clear()
  }

  handleFetch = () => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: `{messages {id author description}}`
      })
    }

    this.setState({ isFetching: true }, () => {
      fetch('/api/graphql', config)
        .then(res => res.json())
        .then(data => {
          this.setState({ messages: data.data.messages, isFetching: false })
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
    const { didMount, messages, isFetching } = this.state

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
        {didMount &&
          messages.length > 0 &&
          messages.map((message, i) => (
            <pre key={i}>{JSON.stringify(message, null, 2)}</pre>
          ))}
      </div>
    )
  }
}

export default MessagesFetch
