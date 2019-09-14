import React from 'react';
import '../GlobalStyles.css'
import BanditNavbar from './BanditNavbar'

function BanditHome() {
    return (
        <div className="component-wrapper">
            <BanditNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Bandit Home </h1>
            </div>
        </div>
    );
}

export default BanditHome;
