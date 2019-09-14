import React from 'react';
import './GlobalStyles.css'

function OTWHome() {
    return (
        <div className="component-wrapper">
            <div className='page-wrapper'>
                <h1 className='page-title'> Over The Wire Home </h1>
                <p>
                    The OverTheWire project is a gameified site that focused on learning Linux, networking and security concepts through shell interactions.  These concepts are broken up in to wargames and further broken up into levels.  You can find the full details of how this project works here: <a target='_blank' rel="noopener noreferrer" href='http://overthewire.org/wargames/'>overthewire.org/wargames</a>
                </p>
                <p> This site is my walkthrough of the progress I am making with these wargames. </p>
                <p> Click a wargame on the left to start exploring. </p>
            </div>
        </div>
    );
}

export default OTWHome;
