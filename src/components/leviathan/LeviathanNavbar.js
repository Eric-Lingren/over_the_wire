import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'
import leviathanData from './leviathanData.json'

function LeviathanNavbar() {
    return (
        <div className="navbar-wrapper">
            <ul className="nav-ul">
                {
                    leviathanData.leviathanData.map( (level, i) => {
                        return (
                            <li className="sub-nav-item" key={level.level}>
                                <Link className='link' to={`level${level.level}`}> Level {level.level} </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default LeviathanNavbar;