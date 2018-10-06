import { combineReducers } from 'redux'
import { graphqlReducer } from '../../utils/redux-wasp'

import testReducer from './testReducer'
import usersData from './usersData'
import messagesData from './messagesData'

const reducers = combineReducers({
  graphql: graphqlReducer,
  messagesData,
  usersData,
  test: testReducer
})

export default reducers
