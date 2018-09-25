import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'

const reducers = combineReducers({
  test: exampleReducer
})

export default reducers
