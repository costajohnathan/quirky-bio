import React from 'react'
import Home from './Home'
import Resume from './Resume'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                </ul>
                </nav>

                <Switch>
                    <Route path="/"> <Home /> </Route>
                    <Route path="/resume" component={Resume}> <Resume /> </Route>
                </Switch>
            </div>
        </Router>
        
)
}

export default Navbar
