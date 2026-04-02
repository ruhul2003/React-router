import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-gray-200 p-4'>
                <h1>Logo</h1>
                <ul className='flex space-x-4'>
                    <li><NavLink to="/">Home</NavLink></li>
                    
                    <li><NavLink to="/laptops">Laptops</NavLink></li>
                    
                    <li><NavLink to="/mobiles">Mobiles</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;