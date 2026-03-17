import React from 'react';
import { Folder, Send, ChevronDown } from 'lucide-react';

const Hero = () => {
  
  // 1. Hàm xử lý cuộn trang mượt mà đến các ID tương ứng
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-slate-900 text-slate-50 flex flex-col overflow-hidden">
      
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* 2. Thanh điều hướng (Navbar) đã gắn sự kiện Click */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <div 
          onClick={() => scrollToSection('home')}
          className="text-blue-400 font-mono font-bold text-2xl tracking-wide cursor-pointer"
        >
          {'<AC/>'}
        </div>
        
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <li onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer">Home</li>
          <li onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">About</li>
          <li onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors cursor-pointer">Projects</li>
          <li onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors cursor-pointer">Skills</li>
          <li onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors cursor-pointer">Experience</li>
          <li onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Nội dung chính */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10 pb-20">
        
        <p className="font-mono text-cyan-400 mb-6 text-sm tracking-widest opacity-90">
          // welcome to my portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Lê Văn Nhất</span>
        </h1>

        <h2 className="text-2xl md:text-4xl text-slate-300 mb-6 font-medium">
          Full-Stack Developer
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          Building digital experiences that merge elegant design with powerful engineering.<br className="hidden md:block"/>
          Passionate about creating software that makes a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-900/50"
          >
            <Folder size={18} />
            View Projects
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-slate-200 px-8 py-3.5 rounded-xl font-medium transition-all duration-300"
          >
            <Send size={18} />
            Contact Me
          </button>
        </div>
      </main>

      {/* Nút cuộn trang xuống phần About */}
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs font-mono mb-1 tracking-widest">scroll</span>
        <ChevronDown size={20} />
      </div>

    </section>
  );
};

export default Hero;