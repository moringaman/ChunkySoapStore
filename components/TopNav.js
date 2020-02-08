import Link from 'next/link'
import CartIcon from './cart/CartIcon'
const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link href="/">
                        <a className="nav-link">Home<span className="sr-only">(current)</span></a>
                      </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
                <CartIcon>Cart</CartIcon>
        </nav>
    )
}

export default TopNav