import CartContext from "./cartContext";
import {useContext} from "react";
import {MDBTable} from "mdb-react-ui-kit";
import {useNavigate} from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    const {cartProducts} = useContext(CartContext)
    const {removeFromCart} = useContext(CartContext)

    return (
        <div className={'TableContainer'}>
            <center>
                <h1>Cart</h1>
            </center>
            <br/>
            {(cartProducts.length !== 0) ?
                <MDBTable
                    striped hover color={'dark'}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>price</th>
                        <th>discountPercentage</th>
                        <th>rating</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartProducts.map(product =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>
                                    <div className={'ImageContainer'}>
                                        <img
                                            className={'img-thumbnail'}
                                            src={product.thumbnail}
                                            alt={product.title}
                                        ></img>
                                    </div>
                                </td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>
                                    <button className={'BtnRed'}
                                    onClick={()=>removeFromCart(product)}
                                    >Remove</button>
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                        <td colSpan={7}>
                            <center>
                                <button className={'BtnCheckout'}
                                onClick={()=>navigate('/checkout')}
                                >Proceed to Checkout</button>
                            </center>
                        </td>
                    </tr>
                    </tbody>
                </MDBTable>
                :
                <h3>Cart is empty 😒</h3>
            }
        </div>
    )
}