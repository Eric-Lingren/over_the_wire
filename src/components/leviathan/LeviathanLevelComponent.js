import React from 'react';
import LeviathanNavbar from './LeviathanNavbar'
import '../GlobalStyles.css'

function NatasLevelComponent(props) {
    return (
        <div className="component-wrapper">
            <LeviathanNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Leviathan Level {props.levelData.level} </h1>

                <h2 className='section-heading'> Level Goal: </h2>
                <p> {props.levelData.goal} </p>
                
                <h2 className='section-heading'> Walkthrough: </h2>
                {
                    props.levelData.image.map( (image, i) => {
                        return <img key={i} src={`${image}`} alt='screenshot'/>
                    })
                }
                

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

export default NatasLevelComponent;
