import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact' 

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> {/* Thêm component cuối cùng tại đây */}
      
      <footer className="py-6 text-center text-slate-500 font-mono text-sm border-t border-slate-800">
        <p>Designed & Built by Nhất © 2026</p>
      </footer>
    </div>
  )
}

export default App