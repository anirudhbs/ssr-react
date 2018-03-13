import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import List from './List'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    )
  }
}

export default App
