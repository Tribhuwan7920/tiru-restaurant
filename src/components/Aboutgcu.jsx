import React, { Component } from 'react';
import "../styles/aboutgcu.css";
import { SiGooglechrome } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

export default class Aboutgcu extends Component {
  render() {
    return (
      <div className='agc_main'>
        <div className="agc_heading">
            <h1>get contact with us </h1>
        </div>

        <div className="agc_link">
            

            <div className="agc_ind_link">
                <div className="agc_icons">
                <SiGooglechrome />
                </div>
                <h1>google</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, beatae!
                </p>
            </div>


            <div className="agc_ind_link">
                <div className="agc_icons">
                <SiFacebook />
                </div>
                <h1>facebook</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, beatae!
                </p>
            </div>


            <div className="agc_ind_link">
                <div className="agc_icons">
                <SiLinkedin />
                </div>
                <h1>linkedin</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, beatae!
                </p>
            </div>


            <div className="agc_ind_link">
                <div className="agc_icons">
                <FaInstagramSquare />
                </div>
                <h1>instagram</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, beatae!
                </p>
            </div>


        </div>
      </div>
    )
  }
}
