import React from 'react';
import '../GlobalStyles.css'
import NatasNavbar from './NatasNavbar'

function NatasHome() {
    return (
        <div className="component-wrapper">
            <NatasNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Natas Home </h1>
                <p>
                Natas teaches the basics of serverside web-security.
                </p>
                <p>
                Each level of natas consists of its own website located at http://natasX.natas.labs.overthewire.org, where X is the level number. There is no SSH login. To access a level, enter the username for that level (e.g. natas0 for level 0) and its password.
                </p>
                <p>
                Each level has access to the password of the next level. Your job is to somehow obtain that next password and level up. All passwords are also stored in /etc/natas_webpass/. E.g. the password for natas5 is stored in the file /etc/natas_webpass/natas5 and only readable by natas4 and natas5.
                </p>
                <p>
                Start here:
                Username: natas0
                Password: natas0
                URL:      http://natas0.natas.labs.overthewire.org
                </p>
            </div>
        </div>
    );
}

export default NatasHome;
