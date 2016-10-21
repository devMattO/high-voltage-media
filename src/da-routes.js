import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/work' component={Work} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={ContactLinks} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))