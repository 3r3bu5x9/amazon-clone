import {Button, Card, InputGroup, ListGroup, ListGroupItem, Form} from "react-bootstrap";
import productList from "./productList";
import {useContext, useState} from "react";
import CartContext from "./cartContext";

export default function Products() {
    const products = productList;
    let [searchText, setSearchText] = useState('');
    let [filteredProducts, setFilteredProducts] = useState(productList);
    const {addToCart} = useContext(CartContext)

    function HandleSearch(e) {
        setSearchText(e.target.value)
        setFilteredProducts(products.filter(
            product => (product.title.toLowerCase().includes(searchText.toLowerCase()))
        ))
    }

    function CardWrapper({product}) {
        return (
            <div className={'CardContainer'}>
                <Card
                    bg={'dark'}
                    text={'white'}
                    style={{width: '20rem'}}
                    className={'mb-2'}>
                    <Card.Img variant={"top"} src={product.thumbnail}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle>{product.brand}</Card.Subtitle>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>{product.rating}</Card.Text>
                        <Button variant={'primary'}
                        onClick={()=>addToCart(product)}
                        >Add to Cart</Button>
                    </Card.Body>
                    <ListGroup variant={'flush'}>
                        <ListGroupItem className={'list-group-item-dark'}>
                            {"$"}{product.price}
                        </ListGroupItem>
                        <ListGroupItem className={'list-group-item-dark'}>
                            {product.discountPercentage}
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Footer
                        className={"text-muted"}>{(product.stock > 0) ? "In Stock" : "Out of Stock"}</Card.Footer>
                </Card>
            </div>
        )
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search for products"
                    aria-label="Search products"
                    aria-describedby="basic-addon2"
                    value={searchText}
                    onChange={HandleSearch}
                />
            </InputGroup>
            {filteredProducts.map(product =>
                <CardWrapper product={product} key={product.id}></CardWrapper>)}
        </>
    )
}