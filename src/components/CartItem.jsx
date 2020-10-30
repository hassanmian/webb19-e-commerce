import React from 'react'

export default function CartItem(props) {
  return (
    <div className="row">
      <div className="col-md-2">
        <img 
          className="img-fluid" 
          src={props.cartItem.images[0].src.small} 
        />
      </div>
      <div className="col-md-6">
        {props.cartItem.name}
      </div>
      <div className="col-md-4">
        {props.cartItem.quantity}
      </div>
    </div>
  )
}
