import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import '@babel/polyfill'
import 'whatwg-fetch'

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
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render()
