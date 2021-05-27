import React from 'react';
import './Header.css'
import logo from './../../Images/logo-yt.png'
import MicIcon from '@material-ui/icons/Mic';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon/>
                <img className="header-logo" src={logo} alt="" />
            </div>
            <div className="header-middle">
                <input type="text" placeholder="Search" />
                <SearchIcon className="search-icon"/>
            </div>
            <div className="header-right">
                <MicIcon className="header-icons" />
                <VideoCallIcon className="header-icons"/>
                <AppsIcon className="header-icons"/>
                <AccountCircleIcon className="header-icons"/>
                <NotificationsIcon/>
            </div>
        </div>
    );
};

export default Header;