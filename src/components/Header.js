import React from 'react'
import './Header.css';
import Logo from "./images/Amazon_logo_PNG3.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
                <SearchIcon />
            </div>
            <div>
                <h4>Hello Morpho </h4>
                <h4>Accounts & Lists</h4>
            </div>
            <div>
                <h4>Returns </h4>
                <h4>& Orders</h4>
            </div>
            <div style={{ position: "relative" }}>
                <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                <span style={{ position: "absolute", left: 14, right: 14, backgroundColor: "white", width: 14, height: 14, borderRadius: 7, alignItems: "center", fontSize:12 ,fontWeight:400 }}>0</span>
            </div>

        </div>
    )
}

export default Header