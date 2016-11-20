import React, { Component } from 'react'
import BurgerMenu from './burger-menu.js'
import ContactBar from './sm-contact-bar.js'
import { Link } from 'react-router'
import Radium from 'radium'

let RadiumLink = Radium(Link)

class VimeoRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peace: [],
      data: []
    }
    this.onData = this.onData.bind(this) //muy importante
  }
  onData ( data ) {
    const parsedVimeoData = JSON.parse(data.currentTarget.response).data
    this.setState({
      peace: parsedVimeoData.map((el, index)=>{
              return (`https://player.vimeo.com/video/${el.uri.slice(8)}`)
      }),
      data: parsedVimeoData
    })
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
          <div className="App-header">
            <RadiumLink className="header-link" to="/">
              <h2 className="page-header fade-in one">HVM | work</h2>
            </RadiumLink>
          </div>
        </main>
        <div className="videos-container">
          <div className="videos-wrapper">
            {this.state.data.map((el, index)=>{
              return (
                <div className="content-wrap" key={index}>
                  <div className="iframe-wrap">
                    <iframe className="frame-style" src={`https://player.vimeo.com/video/${el.uri.slice(8)}?badge=0&portrait=0&byline=0`} frameBorder='0' allowFullScreen></iframe>
                  </div>
                  <div className="title-n-desc">
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default VimeoRequest
