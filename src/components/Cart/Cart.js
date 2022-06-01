import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, randomPick, clearCart} = props;
    
    return (
        <div className='cart'>
            <h4>Selected Players: {cart.length}</h4>
            {
                cart.map(item => 
                    <h3 key={item.id}>{item.name}</h3>
                    )
            }
            <button onClick={()=>randomPick(cart.length)} className='cart-btn'>Auto Choose</button>
            <button onClick={()=>clearCart()} className='cart-btn'> Reset</button>
            <h4>You have picked:</h4>
        </div>
    );
};

export default Cart;