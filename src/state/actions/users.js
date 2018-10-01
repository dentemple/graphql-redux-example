import { ACTIONS } from '../types'

export const clearUsers = () => ({
  type: ACTIONS.CLEAR_USERS
})

export const requestUsers = () => ({
  type: ACTIONS.REQUEST_USERS
})

export const receiveUsers = json => ({
  type: ACTIONS.RECEIVE_USERS,
  users: json,
  receivedAt: Date.now()
})

export const fetchUsers = () => dispatch => {
  dispatch(requestUsers())

  return fetch('/api/users')
    .then(res => res.json(), err => console.log('An error has occurred.', err))
    .then(json => dispatch(receiveUsers(json)))
}
