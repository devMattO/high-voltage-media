import React, { Component } from 'react'
import instagram from './instagram.svg'
import vimeo from './vimeo.svg'
import facebook from './facebook.svg'
import letter from './letter.svg'

class ContactBar extends Component {
  render() {
    return(
      <div className="sm-contact">
      {this.props.sm_icons.map((el,index)=>{
        return(
          <div className="sm-icon-container">
            <a target="_blank" href={el.url} key={index}>
              <img role="presentation" src={el.logo} className='imgTagLogos' />
            </a>
          </div>
        )
      })}
      </div>
    )
  }
}

ContactBar.defaultProps = {
  sm_icons: [
    {
      logo: letter,
      url: 'mailto:highvoltagemedia93@gmail.com'
    },
    {
      logo: instagram,
      url: 'https://www.instagram.com/high_voltage_media/?hl=en'
    },
    {
      logo: vimeo,
      url: 'https://vimeo.com/user58089953'
    },
    {
      logo: facebook,
      url: 'https://www.facebook.com/High-Voltage-Media-1792445644307203/'
    }
  ]
}

export default ContactBar
