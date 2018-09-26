import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './state/store'

import '@babel/polyfill'
import 'whatwg-fetch'

const store = configureStore()
const HOT_RELOAD_THESE_FILES = ['./App']

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(HOT_RELOAD_THESE_FILES, () => {
      setTimeout(render)
    })
  }
}

function render() {
  const App = require('./App').default
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render()
