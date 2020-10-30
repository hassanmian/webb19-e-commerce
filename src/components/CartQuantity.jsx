import React, {useContext, useState, useEffect} from 'react'
import { CartContext } from '../contexts/CartContext'

export default function CartQuantity() {
  const { cartData } = useContext(CartContext)
  const [totalQuantity, setTotalQuantity] = useState(null)

  useEffect( () => {
    let quantityCalculator = 0
    Object.entries(cartData).forEach(cartItem => {
      quantityCalculator += cartItem[1].quantity
    })
    setTotalQuantity(quantityCalculator)
  }, [cartData])

  return (
    <span>
      {totalQuantity && totalQuantity}
    </span>
  )
}
