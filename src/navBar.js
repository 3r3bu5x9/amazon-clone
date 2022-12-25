import {Link} from "react-router-dom";
import AuthContext from "./authContext";
import {useContext} from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

export default function NavBar() {
    const {loginStatus} = useContext(AuthContext)
    const {user} = useContext(UserContext)
    const {cartProducts} = useContext(CartContext)

    console.log(user)

    return (
        <>
            <nav className={'Nav'}>
                <Link to={'/'} className={'SiteTitle'}>SpendUrMoney.com🤩🤑💵</Link>
                <h1>{(loginStatus === 1) ? user.emoji + user.name : ""}</h1>
                <ul>
                    <li>
                        <Link to={'/all-products'}>Stock</Link>
                    </li>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/cart'}>Cart {cartProducts.length}</Link>
                    </li>
                    <li>
                        <Link to={{pathname: '/login'}} state={""}>
                            {(loginStatus === 1) ? 'Logout' : 'Login'}</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}