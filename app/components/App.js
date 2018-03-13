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
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { pokemon } = this.props
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pokemon' render={() => (<Redirect to='/pokemon/ability/telepathy' />)} />
        <Route path='/pokemon/ability/:ability' render={(location) => (<List pokemon={pokemon.list}
          location={location} />)} />
      </Switch>
    )
  }
}

export default App
