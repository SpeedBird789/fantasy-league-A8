import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {id, name, price, image} = product;

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <h3>Price: £{price}</h3>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Team</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;