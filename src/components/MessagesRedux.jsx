import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { queryMessages, clearMessages } from '../state/actions/messages'

class MessagesRedux extends Component {
  static propTypes = {
    handleQuery: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    messages: PropTypes.array.isRequired
  }

  state = {
    author: '',
    description: ''
  }

  handleQuery = e => {
    e.preventDefault()
    const queryString = '{messages {id author description}}'
    this.props.handleQuery(queryString)
  }

  render() {
    const { handleClear, isFetching, messages } = this.props
    const sectionProps = { handleQuery: this.handleQuery, handleClear }

    if (messages.length === 0 && !isFetching) {
      return (
        <SectionContainer {...sectionProps}>List is empty</SectionContainer>
      )
    }

    if (isFetching) {
      return (
        <SectionContainer {...sectionProps}>Fetching list...</SectionContainer>
      )
    }

    return (
      <SectionContainer {...sectionProps}>
        {messages.map((message, i) => (
          <pre key={i}>{JSON.stringify(message, null, 2)}</pre>
        ))}
      </SectionContainer>
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

const mapState = ({ messagesData }) => {
  return {
    ...messagesData
  }
}

const mapDispatch = dispatch => {
  return {
    handleQuery: queryString => {
      dispatch(queryMessages(queryString))
    },
    handleClear: () => {
      dispatch(clearMessages())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(MessagesRedux)
