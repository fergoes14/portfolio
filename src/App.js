import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={loaded ? 'fade-in' : ''}>
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />


      </div>
    </div>

  );
}

export default App;
