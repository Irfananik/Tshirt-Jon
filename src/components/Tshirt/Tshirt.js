import React from 'react';
import './Tshirt.css'

const Tshirt = ({handleAddToCart,tshirt}) => {
    const {name,picture,price} = tshirt
    // const {handleAddToCart,tshirt} = props
    // const {name,picture,price} = props.tshirt
    return (
        <div className="product-container">
            <img className="product-img" src={picture} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;