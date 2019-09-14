import React from 'react';
import '../GlobalStyles.css'
import BanditNavbar from './BanditNavbar'

function BanditLevel01() {
    return (
        <div className="component-wrapper">
            <BanditNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Bandit Level 1 </h1>
            </div>
        </div>
    );
}

export default BanditLevel01;
