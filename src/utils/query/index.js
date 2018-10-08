'use strict'

var configureFetch = require('./configureFetch')

function query(url, init) {
  if (!url || typeof url !== 'string') {
    return Promise.reject(
      "Expected a non-empty string for 'url' but received: " + typeof url
    )
  }

  if (!init) {
    return Promise.reject(
      "Expected an object or a non-empty string for 'init' but received: " +
        typeof init
    )
  }

  if (typeof init !== 'string') {
    if (
      typeof init !== 'object' ||
      init.constructor === Array ||
      ((!init.fields || typeof init.fields !== 'string') &&
        (!init.body || typeof init.body !== 'string'))
    ) {
      return Promise.reject(
        "Expected a string for 'init.fields' or 'init.body' but received: " +
          typeof init
      )
    }
  }

  try {
    var fetchOptions = configureFetch(init)
  } catch (err) {
    return Promise.reject(err)
  }

  if (!fetchOptions) {
    return Promise.reject(
      setTypeError(
        'Something went wrong when setting the fetch options: ' +
          JSON.stringify(fetchOptions)
      )
    )
  }

  return fetch(url, fetchOptions)
}

module.exports = query
