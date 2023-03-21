import React from 'react'
import { PRODUCTS } from '../../products'
import "../../styles/product.css"
import Product from './product'

const Shop = () => {
  return (
    <div className='shopContent'>
        <div className="shopTitle">
            <h1> Blondelle Shop </h1> 
        </div>
        <div className="shopProducts">
          {
            PRODUCTS.map((product) => (
              <Product data ={product} />
            ))
          }
        </div>

    </div>
  )
}

export default Shop