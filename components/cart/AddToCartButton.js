import Link from 'next/link'
import { addFirstProduct, updateCart } from './../../functions'
import { AppContext } from './../context/AppContext'
import { useState, useContext } from 'react'

const AddToCartButton = (props) => {

  const { product } = props
  const [ cart, setCart ] = useContext(AppContext)
  const [ showViewCart, setShowViewCart ] = useState(false)

  const handleAddToCartClick = () => {
    if (process.browser) {
      let existingCart = localStorage.getItem('soap-cart')

      if (existingCart) {
        // If existing add new product to cart
        existingCart = JSON.parse(existingCart)
        const qty = 1
        const updatedCart = updateCart(existingCart, product, qty)
        setCart(updatedCart)

      } else {
        // If no cart Data, create empty array and push product to it
        const newCart = addFirstProduct(product)
        setCart(newCart)
      }

      setShowViewCart(true)
    }
  }

  return(
    <React.Fragment>
      <button onClick={handleAddToCartClick} className="btn btn-success">Add to Cart</button>
      {showViewCart ? 
      <Link href="/cart">
        <button className="btn btn-primary">View Cart</button>
      </Link>
    : ''}
    </React.Fragment>
  )
}

export default AddToCartButton