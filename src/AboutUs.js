import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'

class AboutUs extends Component {
  onData ( data ) {
    let someStuff = data.target.response
    const dude = JSON.stringify(data.currentTarget.response)
    this.setState({
      data: dude
    })
  }
  componentDidMount () {
    let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", this.onData);
      oReq.open("GET", "https://api.vimeo.com/oauth/access_token")
      oReq.send();
  }
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <ContactBar />
          <AppHeader />
        </main>
      </div>
    )
  }
}

export default AboutUs
