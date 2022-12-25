import {createContext, useState} from "react";

const CartContext = createContext({})

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([])
    function addToCart(product){
        setCartProducts([...cartProducts,product])
    }
    function removeFromCart(product){
        const filteredCart = cartProducts.filter(p => (product.id !== p.id))
        setCartProducts([...filteredCart])
        }
    return(
        <CartContext.Provider value={{cartProducts, addToCart, removeFromCart}}>{children}</CartContext.Provider>
    )
}
export default CartContext;