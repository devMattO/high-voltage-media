import React, { Component } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

let RadiumLink = Radium(Link)

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <RadiumLink className="header-link" to="/">
          <h2 className="page-header fade-in one" >High Voltage Media</h2>
        </RadiumLink>
      </div>
    )
  }
}

export default AppHeader