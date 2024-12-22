import { useState } from "react";

const Test = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            price: 300
        }
    ]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    }

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(cartProduct => cartProduct.id !== product.id));
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                    products.map(product => (
                        <div key={product.id}>
                            <li>{product.name}</li> <button
                                onClick={
                                    cart.find(cartProduct => cartProduct.id === product.id) ?
                                        () => handleRemoveFromCart(product) :
                                        () => handleAddToCart(product)
                                }>
                                {
                                    cart.find(cartProduct => cartProduct.id === product.id) ? "Remove from cart" : "Add to cart"
                                }
                            </button>
                        </div>
                    ))
                }
            </ul>
            <hr />
            <h1>Cart</h1>
            <ul>
                {
                    cart.map(product => (
                        <div key={product.id}>
                            <li>{product.name}</li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Test;