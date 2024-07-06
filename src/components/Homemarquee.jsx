import React, { Component } from 'react';
import "../styles/homemarquee.css";

export default class Homemarquee extends Component {
    render() {
        return (
            <div className='hm_main'>


                <div className="main_hm_heading">
                    <h1>our dishes</h1>
                </div>

                <div className="main_hn_marquee">
                    <marquee>
                        <img src="food_5.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_6.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_7.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_8.jpg" alt="no images" className='ma_img' />
                        <img src="food_9.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_10.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_11.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_12.jpg" alt="no images" className='ma_img' />
                        <img src="food_13.jpg" alt="no images"  className='ma_img'/>
                        <img src="food_14.jpg" alt="no images"  className='ma_img'/>
                    </marquee>
                </div>

                
            </div>
        )
    }
}
