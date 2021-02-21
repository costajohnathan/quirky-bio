import React from 'react'
import Rating from './Rating';


const Skills = () => {
    return (
        <div className="paragraph">
            <h2>Skills</h2>
            <div className="row" >
                <div className="column">
                    <ul>Proficient</ul>
                    <div className="lower-case">
                        <li>Python</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Git</li>
                    </div>
                </div> 
                <div className="column">
                    <ul>Familiar</ul>
                    <div className="lower-case">
                        <li>Javascript</li>
                        <li>Amplfy</li>
                        <li>Java</li>
                        <li>EC2</li>
                    </div>
                </div>
            </div>                         

        </div>
    )
}

export default Skills
