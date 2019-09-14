import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'

function NatasNavbar() {
    return (
        <div className="navbar-wrapper">
            <ul className="nav-ul">
                <li className="sub-nav-item">
                    <Link className='link' to="/"> Level 1 </Link>
                </li>
                <li className="sub-nav-item">
                    <Link className='link' to="/bandit-home"> Level 2 </Link>
                </li>
                <li className="sub-nav-item">
                    <Link className='link' to="/natas-home"> Level 3 </Link> 
                </li>
            </ul>
        
        </div>
    );
}

export default NatasNavbar;