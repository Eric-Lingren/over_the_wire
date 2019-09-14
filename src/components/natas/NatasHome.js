import React from 'react';
import '../GlobalStyles.css'
import NatasNavbar from './NatasNavbar'

function NatasHome() {
    return (
        <div className="component-wrapper">
            <NatasNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Natas Home </h1>
            </div>
        </div>
    );
}

export default NatasHome;
