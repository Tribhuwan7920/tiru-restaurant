import React, { Component } from 'react';
import "../styles/homedesign.css";

export default class Homedesign extends Component {
  render() {
    return (
      <div className='hd_main'>
        <img src="food_13.jpg" alt="no images" className="first_image" />

        <img src="food_11.jpg" alt="no images" className="second_images" />

        <img src="food_7.jpg" alt="no images" className="third_images" />

        <img src="food_6.jpg" alt="no images" className="forth_images" />
        
      </div>
    )
  }
}
