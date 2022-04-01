import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} | {tshirt.price}$</p>)
            }
        </div>
    );
};

export default Cart;