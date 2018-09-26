import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { testDispatch } from '../state/actions'

class RenderStore extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
  }

  static defaultProps = {
    store: {}
  }

  handleClick = () => this.props.handleClick()

  render() {
    const preStyle = {
      fontFamily: 'monospace',
      lineHeight: '1.5',
      minHeight: 100,
      margin: 40,
      padding: 20,
      backgroundColor: '#f3f3f3',
      border: '0.5px solid #777',
      borderRadius: 10
    }
    const buttonStyle = {
      fontFamily: 'monospace'
    }

    const { store } = this.props

    return (
      <pre style={preStyle}>
        {JSON.stringify(store, null, 2)}
        <p>
          <button style={buttonStyle} onClick={() => this.handleClick()}>
            Test Dispatch
          </button>
        </p>
      </pre>
    )
  }
}

const mapState = state => {
  return {
    store: state
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(testDispatch())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(RenderStore)
