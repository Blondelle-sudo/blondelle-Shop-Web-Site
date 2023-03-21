import React, { createContext , useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i= 1 ; i<= PRODUCTS.length +1 ; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider= (props) => {
    const [itemscart , setItemscart] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setItemscart((prev) => ({...prev, [itemId] :prev[itemId] + 1})) ;
    }
    const removeFromCart = (itemId) =>{
        setItemscart((prev) => ({...prev, [itemId] :prev[itemId] - 1})) ;
    }
    const updateCartItemCount = (newAmount, itemId) =>{
        setItemscart((prev) => ({...prev, [itemId]: newAmount})) ;
    }

   console.log(itemscart);
    const contextValue = { itemscart, addToCart, removeFromCart}
  return (
    <ShopContext.Provider value ={contextValue}> 
        {props.children} 
    
    </ShopContext.Provider>
  )
}

export default ShopContextProvider