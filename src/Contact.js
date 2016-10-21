import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import BurgerMenu from './burger-menu.js'

class Contact extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <div id="god-container">
            <AppHeader />
            <div>Contact</div>
          </div>
        </main>
      </div>
    )
  }
}

export default Contact
