import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTshirt from '../../hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tshirts,setTshirts] = useTshirt()
    const [cart,setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const newCart = [...cart, selectedItem]
        setCart(newCart)
    }

    return (
        <div className="home-container">
           <div className="shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}/>)
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}/>
           </div>
        </div>
    );
};

export default Home;