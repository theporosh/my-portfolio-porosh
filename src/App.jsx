import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <div className="font-sans antialiased bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        {/* <Projects /> */}
        <ProjectGrid></ProjectGrid>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
