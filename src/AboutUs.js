import React, { Component } from 'react'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'
import { Link } from 'react-router'
import Radium from 'radium'

let RadiumLink = Radium(Link)

class AboutUs extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <ContactBar />
          <div className="App-header">
            <RadiumLink className="header-link" to="/">
              <h2 className="page-header fade-in one">HVM | about</h2>
            </RadiumLink>
          </div>
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
