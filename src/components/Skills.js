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
                        <li>React <Rating /> </li>
                        <li>Java  <Rating /> </li>
                        <li>Unix  <Rating /> </li>
                        <li>Git  <Rating /> </li>
                </div> 
                <div className="column">
                    <ul>Soft Skills</ul>
                        <li>Teamwork and Collaboration</li>
                        <li>Interpersonal Skills</li>
                        <li>Problem solver</li>
                        <li>Adaptability</li>
                        <li>Ownwership</li>
                </div>
            </div>                         

        </div>
    )
}

export default Skills
