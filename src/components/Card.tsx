import React from 'react'

import foto from '../assets/images/img.png'
import './card.scss'

function Card({ prod }: any) {
    return (
      <div className="card_item">
        <div className="card_item_img">
          <div className="card_item_img_name">
            <div className="card_item_img_name_block">
              <span className="card_item_img_name_block_title">created_by</span>
              <span className="card_item_img_name_block_surname">
                {prod.created_by.display_name}
              </span>
            </div>

            <span className="card_item_img_name_name">{prod.name}</span>
          </div>
          <img className="img" src={foto} alt="" />
        </div>
        <div className="card_item_block">
          <div className="block">
            <p>available</p>
            <div className="available">
              {prod.quantity_available} of {prod.quantity}
            </div>
          </div>
          <div className="block">
            <p className="p1">price</p>
            <div className="price">{prod.initial_price} ETN</div>
          </div>
        </div>
      </div>
    );
}

export default Card
