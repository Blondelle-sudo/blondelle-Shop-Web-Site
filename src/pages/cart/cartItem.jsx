import React, {useContext} from 'react'
import { ShopContext } from '../../context/shopContext'
import "../../styles/cart.css"

const CartItem = (props) => {

    const{id, productName, price, productImage} = props.data;
    const {itemscart, addToCart, removeFromCart,updateCartItemCount} = useContext(ShopContext);

  return (
    <div className='cartItem-Content'>
      <img src={productImage}  />
      <div className="description">
        <p> <b> {productName} </b> </p>
        <p> ${price} </p>
        <div className="countAmount">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value = {itemscart[id]} onChange ={(e) => {updateCartItemCount(Number(e.target.value), id)}} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem