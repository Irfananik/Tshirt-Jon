import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Link className="logo-link" to='/home'><h2>Tshirt-Jon</h2></Link>
            <nav className="nav-manu">
                <Link to='/home'>Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to='/order-reviwe'>Order-Review</Link>
            </nav>
        </div>
    );
};

export default Header;