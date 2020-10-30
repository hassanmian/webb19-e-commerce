import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

export default function CartList() {
  const { cartData } = useContext(CartContext)
  return (
    <div className="row">
      <div className="col-md-12">
        {cartData && Object.entries(cartData).map((cartItem, index) => {
          return <CartItem key={index} cartItem={cartItem[1]} />
        })}
      </div>
    </div>
  )
}
