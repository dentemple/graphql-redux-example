export const logAction = store => next => action => {
  // console.log('ACTION', { action })
  return next(action)
}

export const logResult = store => next => action => {
  let result = next(action)
  // console.log('RESULT', { result })
  return result
}

export const logStore = store => next => action => {
  // console.log('STORE', { getState: store.getState() })
  return next(action)
}

export const vanillaPromise = store => next => action => {
  if (typeof action.then !== 'function') {
    return next(action)
  }
  return Promise.resolve(action).then(store.dispatch)
}

export const newThunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
