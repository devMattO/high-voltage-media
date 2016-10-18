import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import LandingPageContent from './Landing-Page-Content.js'
import BurgerMenu from './burger-menu.js'
import { elastic as Menu } from 'react-burger-menu';
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <AppHeader />
          <LandingPageContent />
        </main>
      </div>
    )
  }
}

export default App
