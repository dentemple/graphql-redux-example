import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import MessagesFetch from './components/MessagesFetch'
import MessagesRedux from './components/MessagesRedux'
import MessagesApollo from './components/MessagesApollo'
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
          <Link to="/fetch">Messages w/ Fetch</Link>
          <span> | </span>
          <Link to="/redux">Messages w/ Redux</Link>
          <span> | </span>
          <Link to="/apollo"> Messages w/ Apollo </Link>
        </nav>
        <br />
        <main>
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/redux" component={MessagesRedux} />
            <Route exact path="/fetch" component={MessagesFetch} />
            <Route exact path="/apollo" component={MessagesApollo} />
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
