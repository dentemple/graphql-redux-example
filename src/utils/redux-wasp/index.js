'use strict'

var query = require('../query')
var actions = require('./actions')
var reducer = require('./reducer')
var actionCreators = require('./actionCreators')

module.exports = (function configureAPI() {
  var store = null

  function configureWasp(currentStore) {
    store = currentStore
  }

  function queryWithDispatch() {
    store.dispatch(actionCreators.requestGraphqlData())
    var argsLength = arguments.length
    if (argsLength > 2 && typeof arguments[argsLength - 1] === 'function') {
      var callback = arguments[argsLength - 1]
    }
    return query.apply(null, arguments).then(function(res) {
      var clone = res.clone()
      var status = clone.status
      clone
        .json()
        .then(function(json) {
          if (callback) {
            return callback(json)
          }
          return json
        })
        .then(
          function(data) {
            store.dispatch(actionCreators.receiveGraphqlData(data, status))
            return res
          },
          function(err) {
            var clone = res.clone()
            var status = clone.status
            store.dispatch(actionCreators.receiveGraphqlError(err, status))
            return err
          }
        )
      return res
    })
  }

  return {
    // Configuration method
    configureWasp: configureWasp,
    // User methods for interacting with a web API
    query: queryWithDispatch,
    // Constants
    actions: actions,
    // Reducer
    graphqlReducer: reducer,
    // Action creators
    requestGraphqlData: actionCreators.requestGraphqlData,
    requestGraphqlData: actionCreators.requestGraphqlData,
    receiveGraphqlError: actionCreators.receiveGraphqlError,
    clearGraphqlData: actionCreators.clearGraphqlData
  }
})()
