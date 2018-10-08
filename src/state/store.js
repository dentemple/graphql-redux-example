import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { waspMiddleware } from '../utils/redux-wasp'

import reducers from './reducers'

function configureStore(preloadedState) {
  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunk, waspMiddleware, createLogger())
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const newreducers = require('./reducers').default
        store.replaceReducer(newreducers)
      })
    }
  }

  return store
}

export default configureStore
