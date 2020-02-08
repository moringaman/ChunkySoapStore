import { useContext } from 'react'
import { AppContext } from './../context/AppContext'
import Link from 'next/link'

const CartIcon = () => {
  const [cart, setCart] = useContext(AppContext)
  const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsNumber: ''
  const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice: ''
  return (
    <React.Fragment>
      <Link href="/cart">
        <a>
          <div className="soap-cart__wrapper">
            {totalPrice? <span>&pound;{totalPrice.toFixed(2)}</span>: ''}
            <span className="soap-cart_icon__container">
              <i className="fa fa-shopping-cart soap-cart_icon"/>
              {productsCount? <span className="soap-cart-count">{productsCount}</span> : ''}
            </span>
          </div>
        </a>
      </Link>
    </React.Fragment>
  )
}

export default CartIcon