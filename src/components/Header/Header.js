import React from 'react';
import logo from './../../Images/logo-yt.png'
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div>
            <div className="header-left">
                <MenuIcon/>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;