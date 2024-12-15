import { useEffect, useState } from "react";
import "./App.css";

const App = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`, {
            method: 'GET'
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div>
            <h1>Products</h1>
            <div className="products">
                {
                    products.map(product => (
                        <div key={product.id}>
                            <h2 onClick={() => console.log(product.title, product.id)}>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <img src={product.image} alt={product.title}
                                style={{ width: '100px', height: '100px' }}
                            />
                            <hr />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App;