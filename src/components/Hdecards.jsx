import React, { Component } from 'react';
import "../styles/hdecards.css"

export default class hdecards extends Component {
  render() {

    let {images , name } = this.props;


    return (
      <div className='hi_cards'>
        <div className="hi_ind_cards">


            <div className="hi_ind_image">
                <img src={images} alt="no iamges"  />
            </div>

            <div className="hi_ind_content">
                <h1>{name}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque laboriosam nihil hic, est, suscipit fugiat corporis quis ipsam, illo eligendi modi numquam facere maxime vero voluptas ea quo id!
                </p>
                <button>buy now</button>
            </div>
        </div>
      </div>
    )
  }
}
