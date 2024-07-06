import React, { Component } from 'react';
import "../styles/homeui.css"

export default class Homeui extends Component {
  render() {
    return (
      <div className='homeui_main'>
        <div className="hu_logo">
            <h1>tiru restaurant</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit adipisci ipsum aperiam voluptas qui rerum laboriosam, iusto possimus ratione deleniti, labore corporis velit nisi sint quas, aspernatur molestias ad?</p>
            <button>read more</button>
        </div>
      </div>
    )
  }
}
