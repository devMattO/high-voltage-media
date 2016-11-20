import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'

class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peace: []
    }
    this.onData = this.onData.bind(this) //muy importante
  }
  onData ( data ) {
    const parsedVimeoData = JSON.parse(data.currentTarget.response).data
    console.log(parsedVimeoData[0].uri.slice(8),'<----parsedVimeoData');
    this.setState({peace: parsedVimeoData.map((el, index)=>{
              return (`https://player.vimeo.com/video/${el.uri.slice(8)}?badge=0&portrait=0&byline=0`)
            })})
  }
  componentDidMount () {
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
