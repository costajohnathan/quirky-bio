import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';




function App() {
  return (
    <div className="div">
      <Header />
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
