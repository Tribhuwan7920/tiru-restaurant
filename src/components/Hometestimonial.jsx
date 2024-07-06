import React, { Component } from 'react';
import "../styles/hometestimonial.css"

export default class Hometestimonial extends Component {
  render() {
    return (
      <div className='test_main'>
        <div className="test_heading">
            <h1>our testimonial</h1>
        </div>

        <div className="test_content">
            <div className="test_items">
                <div className="test_images">

                </div>
                <div className="test_info">
                    <h1>tiru restaurant</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum modi id atque accusamus suscipit ducimus numquam, ad harum repellat nobis totam porro error quod animi obcaecati quia tempora. Rerum rem a quasi tenetur non unde dolorum harum modi laudantium.
                    </p>
                    <button>read more</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
