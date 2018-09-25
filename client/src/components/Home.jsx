import React, { Component } from 'react'

class Home extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div>
        <h2>Example List of Users</h2>
        {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    )
  }
}

export default Home
