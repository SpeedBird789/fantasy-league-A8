import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [luckyPlayer, setLuckyPlayer] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const randomPick=(product)=>{
      
        const index = Math.floor(Math.random()*product);
        setLuckyPlayer(cart[index]);
        
       }

    const clearCart=()=>{
        setCart([]);
        setLuckyPlayer([]);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
               }
            </div>

            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart} randomPick={randomPick}></Cart>
                {/* <button onClick={()=>randomPick(cart.length)} className='cart-btn'></button> */}
                {
                    <h1 className='lucky-player'>{luckyPlayer.name}</h1>
                }
            </div>
        </div>
    );
};

export default Shop;