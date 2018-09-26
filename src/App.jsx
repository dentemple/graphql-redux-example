import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import RenderStore from './utils/RenderStore'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <br />
        <br />
        <RenderStore />
      </div>
    )
  }
}

export default hot(module)(App)
