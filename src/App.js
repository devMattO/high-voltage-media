import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import LandingPageContent from './Landing-Page-Content.js'
import BurgerMenu from './burger-menu.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <div id="god-container">
            <AppHeader />
            <LandingPageContent />
          </div>
        </main>
      </div>
    )
  }
}

export default App
