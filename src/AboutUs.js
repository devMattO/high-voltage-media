import React, { Component } from 'react'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'
import { Link } from 'react-router'
import Radium from 'radium'
import dillon from './dillon.jpg'
import jack from './jack.jpg'


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
        <div className="about-us-wrapper">
          <div className="about-us-container">
            <div className="polaroid-container">
              <div className="image-container">
                <img src={jack} role="presentation" />
              </div>
            </div>
            <div className="about-jack">
              <p>Jack Snyder grew up in the Foothills of Glendale, CA, where he attended Crescenta Valley High School. Upon completion Jack immediately began trying to start his career in the Entertainment industry, as well as attending a local community college. Through the various paths taken, being a P.A. on a Lifetime Original Movie, he found his true passion of Drone piloting. With a current part 107 certificate, as well as having Drone University certification Jack is constantly seeking the next aerial shot to be captured.</p>
            </div>
            <div className="polaroid-container">
              <div className="image-container">
                <img src={dillon} role="presentation" />
              </div>
            </div>
            <div className="about-dillon">
              <p>Dillon Winter-Mares was born and raised in the small city of La Crescenta, CA, where he attended Crescenta Valley High School. After graduating from high school Dillon attended a community college prior to transferring to Marymount California University where he studied Film and Television Production. While in attendance Dillon took on a personal emphasis in the field of Editing, where he excelled greatly, earning him a B.A. with honors. Dillon Winter-Mares is well versed in editing software, using primarily the Adobe suite, along with Avid.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
