import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import LandingPageContent from './Landing-Page-Content.js'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'
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
            <ContactBar />
            <div id="god-container">
              <AppHeader />
              <LandingPageContent />
            </div>
            <div className="footer">
              <a className="build-creds" target="_blank" href="https://devmatto.com">
                site by devmatto
              </a>
            </div>
          </main>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App
