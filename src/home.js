import productList from "./productList";
import {Carousel} from "react-responsive-carousel";

export default function Home() {
    const products = productList;

    return (
        <div className={'HomeContainer'}>
            <h1>Home</h1>
            <br/>
            <Carousel autoPlay={true} interval={1000} infiniteLoop={true}
            dynamicHeight={true} showIndicators={true}
            >
                <div>
                    <img src={products[0].thumbnail} alt={'...'}/>
                </div>
                <div>
                    <img src={products[8].thumbnail} alt={'...'}/>
                </div>
                <div>
                    <img src={products[6].thumbnail} alt={'...'}/>
                </div>
                <div>
                    <img src={products[7].thumbnail} alt={'...'}/>
                </div>
                <div>
                    <img src={products[5].thumbnail} alt={'...'}/>
                </div>
            </Carousel>
        </div>
    )
}