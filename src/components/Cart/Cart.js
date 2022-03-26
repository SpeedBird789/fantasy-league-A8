import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    return (
        <div className='cart'>
            <h4>Selected Players: {cart.length}</h4>
            {
                cart.map(item => 
                    <h3 key={item.id}>{item.name}</h3>
                    )
            }
            <button className='cart-btn'>Auto Choose</button>
            <button className='cart-btn'> Reset</button>
        </div>
    );
};

export default Cart;