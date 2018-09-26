import { ACTIONS } from '../types'

export const initialState = {
  str: 'Hello, world',
  val: 0
}

function testReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TEST_DISPATCH:
      return {
        ...state,
        str: 'Action successfully dispatched!',
        val: state.val + 1
      }

    default:
      return state
  }
}

export default testReducer
