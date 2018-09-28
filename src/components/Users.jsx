import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchUsers, clearUsers } from '../state/actions'

class Users extends Component {
  state = {
    didMount: false
  }

  componentDidMount() {
    this.setState({
      didMount: true
    })
  }

  renderUsers = users => {
    return users.map((user, i) => (
      <li key={i} style={{ listStyle: 'none' }}>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </li>
    ))
  }

  render() {
    const { didMount } = this.state
    const { handleClick, handleClear, lastUpdated, users } = this.props

    return (
      <div>
        <button onClick={handleClick}>Get Users</button>
        <button onClick={handleClear}>Clear Users</button>
        {lastUpdated ? <p>Last Updated: {lastUpdated}</p> : <div />}
        <ul>{didMount && users ? this.renderUsers(users) : <div />}</ul>
      </div>
    )
  }
}

const mapState = ({ usersData }) => {
  return {
    users: usersData.users,
    lastUpdated: usersData.lastUpdated
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(fetchUsers())
    },
    handleClear: () => {
      dispatch(clearUsers())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Users)
