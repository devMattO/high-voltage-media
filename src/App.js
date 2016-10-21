import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import LandingPageContent from './Landing-Page-Content.js'
import BurgerMenu from './burger-menu.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={500}>
          <BurgerMenu />
          <main id="page-wrap">
            <div id="god-container">
              <AppHeader />
              <LandingPageContent />
            </div>
          </main>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App
