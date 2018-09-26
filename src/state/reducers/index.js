import { combineReducers } from 'redux'

import testReducer from './testReducer'
import usersData from './usersData'

const reducers = combineReducers({
  test: testReducer,
  usersData
})

export default reducers
