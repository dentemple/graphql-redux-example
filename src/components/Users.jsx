import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchUsers } from '../state/actions'

class Users extends Component {
  state = {
    didMount: false
  }

  componentDidMount() {
    this.setState({
      didMount: true
    })
    this.props.handleClick()
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
    const { handleClick, lastUpdated, users } = this.props

    return (
      <div>
        <button onClick={handleClick}>Refresh Users</button>
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
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Users)
