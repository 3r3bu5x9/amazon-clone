import userList from "./userList";
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

export default function App() {
    const users = [...userList]
    sessionStorage.setItem('users', JSON.stringify(users))

    return (
        <AuthProvider>
            <UserProvider>
                <BrowserRouter>
                    <NavBar loginState={false}></NavBar>
                    <div className={'Container'}>
                        <Routes>
                            <Route path={'/login'} element={<Login/>}></Route>
                            <Route path={'/'} element={<Home/>}></Route>
                            <Route path={'/home'} element={<Home/>}></Route>
                            <Route path={'/products'} element={<Products/>}></Route>
                            <Route path={'/all-products'} element={<AllProductTable/>}></Route>
                            <Route path={'/about'} element={<About/>}></Route>
                            <Route path={'/register'} element={<Register/>}></Route>
                            <Route path={'/navbar'} element={<NavBar/>}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </UserProvider>
        </AuthProvider>
    );
}