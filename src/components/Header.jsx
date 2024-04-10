import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false)

    const handleClick = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <header>
            <p className="logo"><img src="./logo.svg" alt="" /></p>
            <div className="toggle" onClick={handleClick}>
                <img src="./toggle.svg" alt="" />
            </div>
            <ul className={`menu ${displayMenu ? 'open' : ''}`}>
                <span className="close" onClick={handleClick}><img src="./close.svg" alt="" /></span>
                <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}><span></span>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/destinations" className={(nav) => (nav.isActive ? "active" : "")}><span></span>Destinations</NavLink>
                </li>
                <li>
                    <NavLink to="/crew" className={(nav) => (nav.isActive ? "active" : "")}><span></span>Crew</NavLink>
                </li>
                <li>
                    <NavLink to="/technology" className={(nav) => (nav.isActive ? "active" : "")}><span></span>Technology</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;