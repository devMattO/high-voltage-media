import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import BurgerMenu from './burger-menu.js'

class AboutUs extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <div id="god-container">
            <AppHeader />
            <div>DABS</div>
          </div>
        </main>
      </div>
    )
  }
}

export default AboutUs
