import React, { Component } from 'react';
import "../styles/homecards.css";
import cardsdata from "../json/homecards.json"

export default class Homecards extends Component {
  render() {
    console.log(cardsdata)
    return (
      <div className='hc_main'>
        <div className="hc_heading">
          <h1>our famous dish</h1>
        </div>

        <div className="hc_cards">
   
          {cardsdata.map((element) => {
            return (
              <div key={element.id} className="hc_ind_cards">
                <img src={element.images} alt="no images" />
                <h1>{element.name}</h1>
                <p className='f_home_para'>
                  {element.description}
                </p>
                <p className='s_home_para'> ₹{element.cost} </p>
                <button>buy now</button>
              </div>
            )
          })}

        

        </div>
      </div>
    )
  }
}
