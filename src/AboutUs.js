import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'

class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dude: {}
    }
    this.onData = this.onData.bind(this) //muy importante
  }
  onData ( data ) {
    this.state.dude = JSON.parse(data.currentTarget.response)
  }
  componentWillMount () {
    let oReq = new XMLHttpRequest()
      oReq.addEventListener("load", this.onData);
      oReq.open("GET", "https://api.vimeo.com/users/highvoltagemedia/videos")
      oReq.setRequestHeader(
        'Content-Type',
        'application/json'
      )
      oReq.setRequestHeader(
        'Authorization', 'Bearer 96c94f7207e555824aeff93d9035c29a'
      )
      oReq.send()
  }
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <ContactBar />
          <AppHeader />
        </main>
        {console.log(this,'<----this')}
        <iframe src='https://player.vimeo.com/video/189245456?autoplay=1' frameBorder='0' allowFullScreen></iframe>
      </div>
    )
  }
}

export default AboutUs
