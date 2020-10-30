import React, {useState, useEffect, useContext} from 'react'
import ProductListItem from '../components/ProductListItem'
import { ProductContext } from '../contexts/ProductContext'

export default function ProductListPage() {
  const { productListData, setProductListData } = useContext(ProductContext)
  const productListURL = "https://webb19-e-commerce.firebaseio.com/products.json"


  function fetchProductList() {
    if(!productListData) {
      fetch(productListURL)
      .then(res => res.json())
      .then(data => setProductListData(data))
    }
  }

  useEffect( () => {
    fetchProductList()
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        {productListData && Object.entries(productListData).map((productItem, index) => {
          const product = productItem[1]
            return <ProductListItem key={index} product={product} />
        })}
      </div> 
    </div>
  )
}
