import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'

function NatasNavbar() {
    return (
        <div className="navbar-wrapper">
            <ul className="nav-ul">
                <li className="sub-nav-item">
                    <Link className='link' to="/natas-level-01"> Level 1 </Link>
                </li>
                <li className="sub-nav-item">
                    <Link className='link' to="/natas-level-02"> Level 2 </Link>
                </li>
                <li className="sub-nav-item">
                    <Link className='link' to="/natas-level-03"> Level 3 </Link> 
                </li>
                <li className="sub-nav-item">
                    <Link className='link' to="/natas-level-04"> Level 4 </Link> 
                </li>
            </ul>
        
        </div>
    );
}

export default NatasNavbar;