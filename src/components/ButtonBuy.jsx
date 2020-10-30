import React, {useContext, useEffect} from 'react'
import { CartContext } from '../contexts/CartContext'

export default function ButtonBuy(props) {
  const {cartData, setCartData} = useContext(CartContext)
  const { productData, currency } = props

  function handleOnClick() {
   let quantity = 1;
   if (cartData[productData.id]) {
    quantity = cartData[productData.id].quantity + 1
   }

    setCartData({
      ...cartData,
      [productData.id]: {...productData, quantity: quantity}
    })
  }

  useEffect( () => {
    console.log(cartData)
  }, [cartData])

  return (
    <button onClick={handleOnClick} className="btn btn-primary btn-block">
      Buy {productData.name} for {productData.price } {currency}
    </button>
  )
}

/*
EMPTY CART:
{}


CART:
{
  "23787": {
    ...productData,
  }
}

*/