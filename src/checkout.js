import CartContext from "./cartContext";
import {useContext, useState} from "react";
import {MDBTable} from "mdb-react-ui-kit";
import qr from './QR.png'

export default function CheckOut() {
    const {cartProducts} = useContext(CartContext)
    const [willRender, setWillRender] = useState(false)
    const calculateBill = () => {
        let sum = 0
        for (const c of cartProducts) {
            sum += (c.price - c.price * c.discountPercentage/100)
        }
        return sum
    }

    function RenderQR({render}){
        if (render)
        return(
            <div>
                <img
                    src={qr} alt={'qr'}
                />
            </div>
        )
    }

    function ShowBreakdown() {
        return (
            <div className={'BreakdownContainer'}>
                <MDBTable
                    striped hover color={'dark'}
                >
                    <thead>
                    <tr>
                        <td>product</td>
                        <td>price</td>
                        <td>discount</td>
                        <td>price after discount</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartProducts.map(p =>
                            <tr key={p.title}>
                                <td>{p.title}</td>
                                <td>${p.price}</td>
                                <td>{p.discountPercentage}%</td>
                                <td>${p.price - p.price * p.discountPercentage/100}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>${calculateBill()}</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <center>
                                <button className={'BtnPay'}
                                onClick={()=>{setWillRender(true)}}
                                >Pay ${calculateBill()}</button>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <center>
                                <div>
                                    <RenderQR render={willRender}></RenderQR>
                                </div>
                            </center>
                        </td>
                    </tr>
                    </tbody>
                </MDBTable>
            </div>
        )
    }

    return (
        <div className={'CheckOutContainer'}>
            <center>
                <h1>Checkout</h1>
                <br/>
                <ShowBreakdown/>
            </center>
        </div>
    )
}