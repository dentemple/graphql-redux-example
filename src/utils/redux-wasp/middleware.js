var middleware = store => next => action => {
  console.log('1. ', { action })
  let result = next(action)
  console.log('2. ', { result, nextState: store.getState() })
}

module.exports = middleware
