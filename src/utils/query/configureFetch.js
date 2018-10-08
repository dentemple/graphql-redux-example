function configureFetch(init) {
  if (typeof init === 'string') {
    var request = {
      method: init.method || 'POST',
      headers: init.headers || {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: init
      })
    }
  } else {
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
  }

  return request
}

module.exports = configureFetch
