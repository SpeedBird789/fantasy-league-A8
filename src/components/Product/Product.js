import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart} = props;
    const {id, name, price, image} = props.product;

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <h3>Price: £{price}</h3>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;