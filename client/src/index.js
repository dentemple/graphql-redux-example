import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './state/store'

import 'whatwg-fetch'

const store = configureStore()
const root = document.getElementById('root')

let render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}

// Configures Hot Module Reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      setTimeout(render)
    })
  }
}

render()
