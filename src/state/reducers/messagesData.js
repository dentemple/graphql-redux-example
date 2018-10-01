import { ACTIONS } from '../types'

const initialState = {
  isFetching: false,
  lastUpdated: null,
  lastQuery: null,
  messages: []
}

function messagesData(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_MESSAGES:
      return {
        ...state,
        isFetching: true,
        lastQuery: action.lastQuery
      }

    case ACTIONS.RECEIVE_MESSAGES:
      return {
        ...state,
        isFetching: false,
        messages: action.messages,
        lastUpdated: action.receivedAt
      }

    case ACTIONS.CLEAR_MESSAGES:
      return {
        ...state,
        isFetching: false,
        messages: []
      }

    default:
      return state
  }
}

export default messagesData
