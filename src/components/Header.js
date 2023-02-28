import React from 'react'
import './Header.css';
import Logo from "./images/Amazon_logo_PNG3.png";

function Header() {
    return (
        <div className='header'>
            {/* logo */}
            <div>
                <img src={Logo} alt='logo' width={120} />;
            </div>
            {/* search bar */}
            <div>
                <input type='Text' placeholder='Search Items or products' /> 
            </div>
            
        </div>
    )
}

export default Header