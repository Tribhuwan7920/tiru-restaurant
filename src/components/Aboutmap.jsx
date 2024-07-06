import React, { Component } from 'react';
import "../styles/aboutmap.css"

export default class Aboutmap extends Component {
  render() {
    return (
      <div className='am_main'>
        
        <div className="am_images">
            <img src="/map/map_3.jpg" alt="no images" />
        </div>
        <img src="map/map_1.jpg" alt="" className="ig_img" />
      </div>
    )
  }
}
