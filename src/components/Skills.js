import React from 'react'
import Rating from './Rating';


const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <div className="row">
                <div className="column">
                    <ul>Hard skills</ul>
                        <li>Python   <Rating /> </li>
                        <li>Java <Rating /> </li>
                        <li>React  <Rating /> </li>
                </div> 
                <div className="column">
                    <ul>Soft Skills</ul>
                        <li>Ownership</li>
                        <li>Team player</li>
                        <li>Problem solver</li>
                </div>
            </div>                         

        </div>
    )
}

export default Skills
