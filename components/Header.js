import TopNav from './TopNav'
import { AppContext } from './context/AppContext'
import { useContext } from 'react'

const Header = () => {
  const [ cart, setCart ] = useContext(AppContext)
  console.log('Cart: ', cart)
    return(
        <div>
            <TopNav />
        </div>
    )
}

export default Header