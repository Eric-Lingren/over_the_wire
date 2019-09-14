import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <ul className="nav-ul">
                <li className="nav-item">
                    <NavLink className='link' to="/home" > Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='link' to="/bandit/home"> Bandit </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='link' to="/natas/home"> Natas </NavLink> 
                </li>
            </ul>
        
        </div>
    );
}

export default Navbar;
