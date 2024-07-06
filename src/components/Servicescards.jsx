import React, { Component } from 'react';
import "../styles/servicescards.css";
import { FaTruck } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsHousesFill } from "react-icons/bs";
import { MdOutlineTableBar } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { Md4gMobiledata } from "react-icons/md";
import { PiLaptopBold } from "react-icons/pi";
import { BsAlarmFill } from "react-icons/bs";


export default class Servicescards extends Component {
  render() {
    return (
      <div className='sca_main'>
        <div className="sca_heading">
            <h1>our services</h1>
        </div>


        <div className="sca_cards">


            <div className="sca_ind_cards">
            <FaTruck className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>


            <div className="sca_ind_cards">

            <IoFastFoodOutline className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        
            </div>


            <div className="sca_ind_cards">
            <BsHousesFill className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            
            </div>


            <div className="sca_ind_cards">
            <MdOutlineTableBar className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            
            </div>

            
            <div className="sca_ind_cards">
            <FaMobileAlt className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            </div>
            <div className="sca_ind_cards">
            <Md4gMobiledata className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            </div>
            <div className="sca_ind_cards">
            <PiLaptopBold className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            </div>
            <div className="sca_ind_cards">
            <BsAlarmFill className='sca_img' />
            <p>easy transportantion Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            </div>


        </div>
      </div>
    )
  }
}
