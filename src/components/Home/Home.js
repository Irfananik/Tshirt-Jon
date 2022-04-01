import React from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTshirt from '../../hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tshirts,setTshirts] = useTshirt()

    return (
        <div className="home-container">
           <div className="shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}/>)
                }
           </div>
           <div className="cart-container">
               <Cart/>
           </div>
        </div>
    );
};

export default Home;