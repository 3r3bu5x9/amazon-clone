import {MDBTable} from "mdb-react-ui-kit";

export default function AllProductTable({productList}) {
    return (
        <div className={'TableContainer'}>
            <MDBTable
                striped hover color={'dark'}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>price</th>
                    <th>discountPercentage</th>
                    <th>rating</th>
                    <th>stock</th>
                    <th>brand</th>
                    <th>category</th>
                    <th>thumbnail</th>
                </tr>
                </thead>
                <tbody>
                {
                    productList.map(product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.discountPercentage}</td>
                            <td>{product.rating}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>
                                <img
                                    className={'img-thumbnail'}
                                    src={product.thumbnail}
                                    alt={product.title}
                                ></img>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </MDBTable>
        </div>
    )
}