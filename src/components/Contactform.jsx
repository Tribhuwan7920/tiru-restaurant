import React, { Component } from 'react';
import "../styles/contactform.css";

export default class Contactform extends Component {
  render() {
    return (
      <div className='cf_main'>
        <div className="cf_images"></div>

        <div className="cf_content">
            <h1>get contact with us </h1>
            <form action="">
                <p>enter your name</p>
                <input type="text" />
                <p>enter your eamil</p>
                <input type="text" />
                <p>enter your phone no.</p>
                <input type="text" />
                <button>submit now</button>
            </form>
        </div>
        
      </div>
    )
  }
}
