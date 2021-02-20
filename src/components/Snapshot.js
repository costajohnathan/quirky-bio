import React from 'react'
import linkedin from './linkedin.png';
import github from './github.png';

const Snapshot = () => {
    return (
        <div>
            <h2>SNAPSHOT</h2>
            <div className="row">
                <div className="column">
                    <img className="image" src={linkedin} alt="Linkedin" />
                </div>
                <div className="column">
                    <img className="image" src={github} alt="GitHub" />
                </div>
            </div>
        </div>
    )
}

export default Snapshot
