import React from 'react';
import NatasNavbar from './NatasNavbar'
import '../GlobalStyles.css'

function NatasLevelComponent(props) {
    return (
        <div className="component-wrapper">
            <NatasNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Natas Level {props.levelData.level} </h1>

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
