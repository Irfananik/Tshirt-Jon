import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const {name,picture,price} = props.tshirt
    return (
        <div className="product-container">
            <img className="product-img" src={picture} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Tshirt;