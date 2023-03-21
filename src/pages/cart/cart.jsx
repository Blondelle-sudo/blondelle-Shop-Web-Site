import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import { PRODUCTS } from '../../products';
import CartItem from './cartItem';
import "../../styles/cart.css"

const Cart = () => {

  const {itemscart} = useContext(ShopContext);

  return (
    <div className='cartContent'>
      <div className="title"> 
        <h1> Your cart items </h1>
      </div>
      <div className="cart-item">
       {PRODUCTS.map( (product) => {
         if(itemscart[product.id] !== 0) {
            return <CartItem data = {product} /> ;
         }
       })}
      </div>
    </div>
  )
}

export default Cart