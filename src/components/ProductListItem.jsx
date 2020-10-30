import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBuy from './ButtonBuy'

export default function ProductListItem(props) {
  return (
    <div className="col-md-4">
      <img 
        className="img-fluid" 
        src={props.product.images[0].src.small} 
      />
      <h5>{props.product.name}</h5>
      <Link 
        to={`/products/${props.product.id}`}>
          Read more about {props.product.name}
        </Link>
      <ButtonBuy productData={props.product} currency="SEK" />
    </div>
  )
}
