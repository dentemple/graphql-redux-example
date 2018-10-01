import { combineReducers } from 'redux'

import testReducer from './testReducer'
import usersData from './usersData'
import messagesData from './messagesData'

const reducers = combineReducers({
  messagesData,
  usersData,
  test: testReducer
})

export default reducers
