import React, { Component } from 'react';
import "../styles/aboutcont.css";
import { CiLinkedin } from "react-icons/ci";

export default class Aboutcont extends Component {
  render() {
    return (
      <div className='ac_main'>
        <div className="ac_heading">
            <h1>our contributors</h1>
        </div>


        <div className="ac_content">

            <div className="ac_ind_cards">
                <img src="person_1.jpg" alt="no images" />
                <h1>abhishek sharma</h1>
                <p> frontend enginner , founder of abcd company </p>
                <button><CiLinkedin /></button>
            </div>


            <div className="ac_ind_cards">
                <img src="person_2.jpg" alt="no images" />
                <h1>sahil aggarwal</h1>
                <p> backend enginner , founder of efgh company </p>
                <button><CiLinkedin /></button>
            </div>
            <div className="ac_ind_cards">
                <img src="person_3.jpg" alt="no images" />
                <h1>samir rajput</h1>
                <p> database enginner , founder of xyz company </p>
                <button><CiLinkedin /></button>
            </div>


        </div>
      </div>
    )
  }
}
