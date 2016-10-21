import React from 'react';
import { elastic as Menu } from 'react-burger-menu'
import { Link } from 'react-router'
import Radium from 'radium'

let RadiumLink = Radium(Link)

export default React.createClass({
  render() {
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <RadiumLink className="menu-item" to="/">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/about-us">About</RadiumLink>
        <RadiumLink className="menu-item" to="/contact">Contact</RadiumLink>
      </Menu>
    );
  }
});