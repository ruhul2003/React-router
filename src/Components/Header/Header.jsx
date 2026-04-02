import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-gray-200 p-4'>
                <h1>Logo</h1>
                <ul className='flex space-x-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/laptops">Laptops</Link></li>
                    <li><Link to="/mobiles">Mobiles</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;