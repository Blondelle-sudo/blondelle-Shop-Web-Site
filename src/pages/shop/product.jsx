import React, { useContext } from 'react'
import "../../styles/product.css"
import { ShopContext } from '../../context/shopContext'

const Product = (props) => {

    const {id, productName, price, productImage} = props.data
    const {addToCart, itemscart} = useContext(ShopContext);

    const cartItemAmount = itemscart[id];

  return (
    <div className="productContent">
     <img src={productImage} className="" />
     <div className="productdescription">
       <span className="productName"> {productName} </span>
       <span className="price"> ${price} </span>

     </div>
      <button className="addToCart" onClick={() => addToCart(id)}> 
        Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>} </button>
    </div>
  )
}

export default Product