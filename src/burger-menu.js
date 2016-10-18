import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default React.createClass({
  render() {
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <RadiumLink className="menu-item" to="/home">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/settings">Settings</RadiumLink>
        <RadiumLink className="menu-item" to="/blablabla">Blablabla</RadiumLink>
      </Menu>
    );
  }
});