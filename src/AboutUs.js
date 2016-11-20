import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'

class AboutUs extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <ContactBar />
          <AppHeader />
        </main>
        <div className="about-us-container">
          <div className="polaroid-container">
            <div className="image-container">
            </div>
          </div>
          <div className="polaroid-container">
            <div className="image-container">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
