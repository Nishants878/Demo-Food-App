import React from 'react';
import classes from './Topbar.module.css';
import MenuIcon from '../assests/img-menu.png'
import SearchIcon from '../assests/img-search.png';
const Topbar = () => {
    return(
        <header className={classes.Topbar}>
             <img className={classes.ToggleMenu} src={MenuIcon} alt="Menu Icon" />
            <p className={classes.Logo}>Chukwudi</p>
            <div className={classes.SearchContainer}>
                <img className={classes.SearchIcon} src={SearchIcon} alt="Search Icon" />
                <input className={classes.SearchBox} type="text" name="search" placeholder="Search" />
            </div>
        </header>
    );
}


export default Topbar;