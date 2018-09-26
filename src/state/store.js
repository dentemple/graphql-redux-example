import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import reducers from './reducers'
import {
  logAction,
  logResult,
  logStore,
  vanillaPromise,
  newThunk
} from './middleware'

function configureStore(preloadedState) {
  const store = createStore(
    reducers,
    preloadedState,
    // applyMiddleware(thunk, createLogger())
    applyMiddleware(newThunk, logAction, logResult, logStore, vanillaPromise)
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
