import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import Dragula from 'react-dragula'
import BurgerMenu from './burger-menu.js'

class AboutUs extends Component {
  render() {
    return (
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <AppHeader />
          <div className='container' ref={this.dragulaDecorator}>
            <div>Swap me around</div>
            <div>Swap her around</div>
            <div>Swap him around</div>
            <div>Swap them around</div>
            <div>Swap us around</div>
            <div>Swap things around</div>
            <div>Swap everything around</div>
          </div>
        </main>
      </div>
    )
  }
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  }
}

export default AboutUs
