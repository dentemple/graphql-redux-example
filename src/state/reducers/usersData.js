import { ACTIONS } from '../types'

const initialState = {
  isFetching: false,
  lastUpdated: null,
  users: []
}

function usersData(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_USERS:
      return {
        ...state,
        isFetching: true
      }

    case ACTIONS.RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
        lastUpdated: action.receivedAt
      }

    case ACTIONS.CLEAR_USERS:
      return {
        ...state,
        isFetching: false,
        users: []
      }

    default:
      return state
  }
}

export default usersData
