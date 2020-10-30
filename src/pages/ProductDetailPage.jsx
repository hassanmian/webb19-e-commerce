import React, {useEffect, useState, useContext} from 'react'
import ButtonBuy from '../components/ButtonBuy'
import ReviewList from '../components/ReviewList'
import { ProductContext } from '../contexts/ProductContext'

export default function ProductDetailPage(props) {
  const [productData, setProductData] = useState(null)
  const { productListData, setProductListData } = useContext(ProductContext)

  const productId = props.match.params.id
  const productDetailUrl = `https://webb19-e-commerce.firebaseio.com/products/${productId}.json`
  const currency = "SEK"

  function fetchProduct() {
    if(productListData && productListData[productId]) {
      setProductData(productListData[productId])
    } else {
      fetch(productDetailUrl)
      .then(res => res.json())
      .then(data => setProductData(data))
    }
  }

  useEffect( () => {
    fetchProduct()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {productData && (
            <>
              <img src={productData.images[0].src.medium}  className="img-fluid"/>
              <h5>{productData.name}</h5>
              <p>
                {productData.description}
              </p>
              <p>
                Stock: {productData.stock}
              </p>
              <p>
                Price: {productData.price} {currency}
              </p>
              <ButtonBuy productData={productData} currency={currency} />
              <ReviewList productId={productData.id} />
            </>
          )}
          {!productData && (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}
