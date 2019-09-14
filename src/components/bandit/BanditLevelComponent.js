import React from 'react';
import '../GlobalStyles.css'
import BanditNavbar from './BanditNavbar'

function BanditLevelComponent(props) {
    console.log(props.levelData);
    return (
        <div className="component-wrapper">
            <BanditNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Bandit Level {props.levelData.level} </h1>
                <h2 className='section-heading'> Level Goal: </h2>
                <p> {props.levelData.goal} </p>
                <h2 className='section-heading'> Commands you may need to solve this level: </h2>
                <p> {props.levelData.commands} </p>
            </div>
        </div>
    );
}

export default BanditLevelComponent;
