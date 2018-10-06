import { ACTIONS } from '../types'
import { query } from '../../utils/redux-wasp'

export const clearMessages = () => ({
  type: ACTIONS.CLEAR_MESSAGES
})

export const requestMessages = queryString => ({
  type: ACTIONS.REQUEST_MESSAGES,
  lastQuery: queryString
})

export const receiveMessages = json => ({
  type: ACTIONS.RECEIVE_MESSAGES,
  messages: json,
  receivedAt: Date.now()
})

export const queryMessages = queryString => dispatch => {
  const callback = json => {
    const result = json.data.messages
    console.log({ result })
    return result
  }

  dispatch(requestMessages(queryString))
  return query('/api/graphql', { fields: queryString }, callback)
}
