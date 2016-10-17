import React, { Component } from 'react'
import AppHeader from './App-Header.js'
import LandingPageContent from './Landing-Page-Content.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <LandingPageContent />
      </div>
    )
  }
}

export default App
