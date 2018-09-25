import React, { Component } from 'react'

import Home from './components/Home'
import RenderStore from './components/RenderStore'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <Home />
        <RenderStore />
      </div>
    )
  }
}

export default App
