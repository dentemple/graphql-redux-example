import { ACTIONS } from './types'

export function testDispatch() {
  console.log('Action:', ACTIONS.TEST_DISPATCH)
  return {
    type: ACTIONS.TEST_DISPATCH
  }
}
