import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    return (
        <div className='cart'>
            <h4>Cart Summary</h4>
                <p>Selected Players: {cart.length} </p>
        </div>
    );
};

export default Cart;