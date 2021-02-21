import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Howdy!</h1>
            <Router>
                <p><Link to="/Resume">Resume</Link></p>
            </Router>
        </div>
    )
}

export default Home
