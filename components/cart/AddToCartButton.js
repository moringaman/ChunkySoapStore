import Link from 'next/link'
import { addFirstProduct } from './../../functions'
import { AppContext } from './../context/AppContext'
import { useState, useContext } from 'react'

const AddToCartButton = (props) => {

  const { product } = props
  const [ cart, setCart ] = useContext(AppContext)

  const handleAddToCartClick = () => {
    if (process.browser) {
      let existingCart = localStorage.getItem('soap-cart')

      if (existingCart) {
        // If existing add new product to cart
      } else {
        // If no cart Data, create empty array and push product to it
        const newCart = addFirstProduct(product)
        setCart(newCart)
      }
    }
  }

  return(
    <React.Fragment>
      <button onClick={handleAddToCartClick} className="btn btn-success">Add to Cart</button>
    </React.Fragment>
  )
}

export default AddToCartButton