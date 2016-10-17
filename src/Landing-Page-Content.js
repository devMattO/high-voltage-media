import React, { Component } from 'react'
import Slider from 'react-slick'

class LandingPageContent extends Component {
  render() {
    let settings = {
      dots: true,
    };
    return (
      <div className="video-carousel">
        <Slider {...settings}>
          <div><img role="presentation" src="http://www.surf-pics.com/wp-content/uploads/2013/01/Cove_Water1.jpg" /></div>
          <div><img role="presentation" src="http://www.surf-pics.com/wp-content/uploads/2013/01/Gare01_Edited1.jpg" /></div>
          <div><img role="presentation" src="http://www.surf-pics.com/wp-content/uploads/2013/01/GLand.jpg" /></div>
          <div><img role="presentation" src="http://www.surf-pics.com/wp-content/uploads/2013/01/Photo04_4.jpg" /></div>
          <div><img role="presentation" src="http://www.surf-pics.com/wp-content/uploads/2013/01/GLAND_Snow.jpg" /></div>
          <div><img role="presentation" src="http://www.surf-pics.com/wp-content/uploads/2013/01/Frammy_Cove1.jpg" /></div>
        </Slider>
      </div>
    )
  }
}

export default LandingPageContent