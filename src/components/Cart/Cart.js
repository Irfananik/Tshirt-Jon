import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    let command
    if (cart.length === 0) {
        command = <p>Please at list add one item...!</p>
    }else if(cart.length === 1) {
        command = <p>If you want, add one more item...!</p>
    }else {
        command = <p>Thanks for adding...!</p>
    }

    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>
            {command}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} | {tshirt.price}$ | <button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)
            }
            {cart.length === 3 && <button>Review</button>}
        </div>
    );
};

export default Cart;