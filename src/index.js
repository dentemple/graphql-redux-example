import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import configureStore from './state/store'

import '@babel/polyfill'
import 'whatwg-fetch'

const client = new ApolloClient({
  uri: '/api/graphql',
  request: operation => {
    console.log('"Operation" to be performed:', operation)
  },
  clientState: {
    defaults: {
      isConnected: true
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          cache.writeData({ data: { isConnected } })
          return null
        }
      }
    }
  }
})

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
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

render()
