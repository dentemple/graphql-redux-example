import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import reducers from './reducers'
import { monitorReducerEnhancer } from './enhancers'
import {
  logAction,
  logResult,
  logStore,
  vanillaPromise,
  newThunk
} from './middleware'

function configureStore(preloadedState) {
  let middlewares = [newThunk, vanillaPromise]
  if (process.env === 'development') {
    middlewares = [...middlewares, logAction, logResult, logStore]
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(
    reducers,
    preloadedState,
    // applyMiddleware(thunk, createLogger())
    // applyMiddleware(newThunk, logAction, logResult, logStore, vanillaPromise)
    composedEnhancers
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
