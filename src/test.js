import React, { Component }  from 'react'
import { Carousel } from 'react-responsive-carousel'

class CarouselVideos extends Component{
    render() {
        return (
            <Carousel showThumbs={false}>
            {this.props.videos.map((el,index)=>{
              return (
                <div key={index}>
                    <iframe width="1600" height="450" src={el} allowFullScreen />
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