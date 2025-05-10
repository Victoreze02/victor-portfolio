import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExprience';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';



export default function App() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 space-y-16">
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
