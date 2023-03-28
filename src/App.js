import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Head />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
