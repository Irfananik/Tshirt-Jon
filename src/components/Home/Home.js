import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTshirt from '../../hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirts => tshirts._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }else{
            alert("Already exists")
        }

    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest =  cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setCart(rest)
    }

    return (
        <div className="home-container">
            <div className="shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
        </div>
    );
};

export default Home;