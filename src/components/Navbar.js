import React from 'react'
import Home from './Home'
import Resume from './Resume'
import About from './About'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {
    return (
        <Router >
            <div>
                <nav className="lower-case" className="navStyle">
                    <ul className="myUl" >
                        <li className="myMenu"><Link to="/">Home</Link></li>
                        <li className="myMenu"> | </li>
                        <li className="myMenu"><Link to="/about">About</Link></li>
                        <li className="myMenu"> | </li>
                        <li className="myMenu"><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route  path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/resume" exact component={Resume} />
                </Switch>
            </div>
        </Router>
        
)
}

export default Navbar
