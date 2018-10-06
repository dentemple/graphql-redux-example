function query(url, init) {
  if (!url || typeof url !== 'string')
    return Promise.reject(
      "Expected a string for 'url' but received: " + typeof url
    )

  if (init && typeof init !== 'object')
    return Promise.reject(
      "Expected an object for 'init' but received: " + typeof init
    )

  if (init === undefined) return runFetch

  return runFetch(init)

  // ----------
  function runFetch(init) {
    if (!init || typeof init !== 'object')
      return Promise.reject(
        "Expected an object for 'init' but received: " + typeof init
      )

    if (
      (!init.fields || typeof init.fields !== 'string') &&
      (!init.body || typeof init.body !== 'string')
    )
      return Promise.reject(
        "Expected a string for 'init.fields' or 'init.body' but received: " +
          typeof init
      )

    try {
      var fetchOptions = configureFetch(init)
    } catch (err) {
      return Promise.reject(err)
    }

    if (!fetchOptions)
      return Promise.reject(
        setTypeError(
          'Something went wrong when setting the fetch options: ' +
            JSON.stringify(fetchOptions)
        )
      )

    return fetch(url, fetchOptions)
  }
}

function configureFetch(init) {
  var request = {
    method: init.method || 'POST',
    headers: init.headers || {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body:
      init.body ||
      JSON.stringify({
        query: init.fields,
        variables: init.variables
      }),
    mode: init.mode,
    credentials: init.credentials,
    cache: init.cache,
    redirect: init.redirect,
    referrer: init.referrer,
    referrerPolicy: init.referrerPolicy,
    integrity: init.integrity,
    keepalive: init.keepalive,
    signal: init.signal
  }

  return request
}

module.exports = query
