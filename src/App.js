import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar';
import './App.css';

import ProjectDisplay from './components/ProjectDisplay';


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

       
      </Router>

   
    </div>


  );
}

export default App;
