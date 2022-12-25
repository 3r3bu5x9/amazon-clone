import userList from "./userList";
import productList from "./productList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./navBar";
import Login from "./login";
import Home from "./home";
import Products from "./products";
import AllProductTable from "./allProductTable";
import About from "./about";
import Register from "./register";
import {AuthProvider} from "./authContext";
import {UserProvider} from "./userContext";
import Cart from "./cart";
import {CartProvider} from "./cartContext";
import CheckOut from "./checkout";

export default function App() {
    const users = [...userList]
    const products = [...productList]
    sessionStorage.setItem('users', JSON.stringify(users))

    return (
        <AuthProvider>
            <UserProvider>
                <CartProvider>
                    <BrowserRouter>
                        <NavBar loginState={false}></NavBar>
                        <div className={'Container'}>
                            <Routes>
                                <Route path={'/login'} element={<Login/>}></Route>
                                <Route path={'/'} element={<Home/>}></Route>
                                <Route path={'/home'} element={<Home/>}></Route>
                                <Route path={'/products'} element={<Products/>}></Route>
                                <Route path={'/all-products'} element={<AllProductTable productList={products}/>}></Route>
                                <Route path={'/about'} element={<About/>}></Route>
                                <Route path={'/register'} element={<Register/>}></Route>
                                <Route path={'/cart'} element={<Cart/>}></Route>
                                <Route path={'/checkout'} element={<CheckOut/>}></Route>
                            </Routes>
                        </div>
                    </BrowserRouter>
                </CartProvider>
            </UserProvider>
        </AuthProvider>
    );
}