import React from 'react';
import BanditNavbar from './BanditNavbar'
import '../GlobalStyles.css'

function BanditLevelComponent(props) {
    return (
        <div className="component-wrapper">
            <BanditNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Bandit Level {props.levelData.level} </h1>

                <h2 className='section-heading'> Level Goal: </h2>
                <p> {props.levelData.goal} </p>

                <h2 className='section-heading'> Commands you may need to solve this level: </h2>
                <p> {props.levelData.commands} </p>
                
                <h2 className='section-heading'> Terminal Walkthrough: </h2>
                <img src={`${props.levelData.image}`} alt='screenshot'/>

                <h2 className='section-heading'> Answer: </h2>
                <pre className='code-wrapper'>
                    <code className="code">
                        {props.levelData.answer}
                    </code>
                </pre>

                <h2 className='section-heading'> What I learned: </h2>
                <p> {props.levelData.takeaways} </p>
            </div>
        </div>
    );
}

export default BanditLevelComponent;
