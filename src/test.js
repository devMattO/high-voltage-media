import React, { Component }  from 'react'
import { Carousel } from 'react-responsive-carousel'

class CarouselVideos extends Component{
    render() {
      const bruh = this.props.money
        return (
            <Carousel showThumbs={false}>
              {console.log(bruh.data,'this')}
              {this.props.videos.map((el,index)=>{
                return (
                  <div className="video-container" key={index}>
                      <iframe width="1200" height="475" src={el+'?badge=0&portrait=0&byline=0'} allowFullScreen />
                  </div>
                )
              })}
            </Carousel>
        )
    }
}

CarouselVideos.defaultProps = {
  videos: [
    'https://player.vimeo.com/video/188184881',
    'https://player.vimeo.com/video/188184884',
    'https://player.vimeo.com/video/188184882',
    'https://player.vimeo.com/video/188184880'
  ]
}

export default CarouselVideos