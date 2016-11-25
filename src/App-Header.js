import React, { Component } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import logo from './Transparentbackground.png'

let RadiumLink = Radium(Link)

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <RadiumLink className="header-link" to="/">
          <img role="presentation" src={logo} className="logo-header"></img>
        </RadiumLink>
      </div>
    )
  }
}

export default AppHeader