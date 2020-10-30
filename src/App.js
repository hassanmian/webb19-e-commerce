import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import CartList from './components/CartList';
import CartQuantity from './components/CartQuantity';

function App() {
  const [productListData, setProductListData ] = useState(null)
  const [cartData, setCartData] = useState({})

  return (
    <div>
      <h1>E-Commerce</h1>
      
      <CartContext.Provider value={{cartData, setCartData}} >
        <ProductContext.Provider value={{productListData, setProductListData}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart (<CartQuantity />)</Link>
          </li>
        </ul>
          <Switch>
            <Route path="/products/:id" component={ProductDetailPage}>
            </Route>
            
            <Route path="/products">
              <ProductListPage />
            </Route>
            
            <Route path="/cart">
              <CartPage />
            </Route>

            <Route path="/">
              <p>Welcome to our e-commerce app</p>
            </Route>
          </Switch>
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
