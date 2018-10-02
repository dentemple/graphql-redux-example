var middleware = require('./middleware')
var configureMiddleware = require('./configureMiddleware')
var query = require('./query')

module.exports = {
  waspMiddleware: middleware,
  configureWaspMiddleware: configureMiddleware,
  query: query
}
