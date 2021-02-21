import logo from './logo.svg';
import './index.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="div">
          <Navbar />
      </div>
    </Router>
  );
}

export default App;
