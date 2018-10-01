import { ACTIONS } from '../types'
import query from '../../utils/query'

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
  dispatch(requestMessages(queryString))
  return (
    query('/api/graphql', queryString)
      .then(
        res => res.json(),
        err => console.log('An error has occurred.', err)
      )
      // .then(json => {
      //   console.log({ result: json.data.messages })
      //   return json
      // })
      .then(json => dispatch(receiveMessages(json.data.messages)))
  )
}
