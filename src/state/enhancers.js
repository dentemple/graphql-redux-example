import { initialState } from './reducers/testReducer'

const round = number => Math.round(number * 100) / 100

export const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log({ state, action })

    console.log('===', 'Reducer process time:', diff, '===')

    return newState
  }

  return createStore(monitoredReducer, initialState, enhancer)
}
