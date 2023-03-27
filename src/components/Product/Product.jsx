import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} 
            className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />

                </button>
        </div>
    );
};

export default Product;