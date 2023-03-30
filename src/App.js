import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar';
import './App.css';
import Footer from './components/Footer';


function App() {


 




  return (
    <div className="App">
      <Router>
        {/* <Head /> */}
        <NavBar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>

   
    </div>


  );
}

export default App;
