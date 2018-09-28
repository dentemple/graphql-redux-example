import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import MessagesFetch from './components/MessagesFetch'
import RenderStore from './utils/RenderStore'

class App extends Component {
  render() {
    return (
      <div>
        <h1>API Examples</h1>
        <br />
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/users">Users</Link>
          <span> | </span>
          <Link to="/messages/fetch">Messages Fetch</Link>
        </nav>
        <br />
        <main>
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/messages/fetch" component={MessagesFetch} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <br />

        <RenderStore />
      </div>
    )
  }
}

export default hot(module)(App)
