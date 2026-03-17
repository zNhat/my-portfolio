import React from 'react';
// ĐÃ SỬA: Thêm Activity vào danh sách import
import { Github, ExternalLink, Users, Wand2, Bot, Activity } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      topIcon: <Users size={32} className="text-indigo-400 mb-3" />,
      topLabel: "Transit System", 
      topBg: "bg-gradient-to-b from-indigo-900/50 to-transparent",
      title: "Smart Bus Tracking System",
      description: "A real-time school bus tracking platform designed to enhance student safety. Features live GPS monitoring, automated notifications for parents, and an administrative dashboard for route management.",
      techStack: ["React", "Node.js", "Google Maps API", "Tailwind CSS"],   
      techColor: "text-indigo-300 bg-indigo-900/30 border-indigo-700/50",
      githubLink: "https://github.com/Ko4rut/Smart-Bus-Tracking-System",
      liveLink: "#"
    },
    {
      id: 2,
      topIcon: <Activity size={32} className="text-teal-400 mb-3" />, 
      topLabel: "Healthcare", 
      topBg: "bg-gradient-to-b from-teal-900/50 to-transparent",
      title: "Hospital Management",
      description: "A comprehensive hospital management application streamlining daily healthcare operations. Features include patient registration, doctor appointment scheduling, and integrated billing systems.",
      techStack: ["C#", ".NET", "SQL Server", "WinForms"], 
      techColor: "text-teal-300 bg-teal-900/30 border-teal-700/50",
      githubLink: "https://github.com/Ko4rut/Hospital_Management",
      liveLink: "#"
    },
    {
      id: 3,
      topIcon: <Bot size={32} className="text-fuchsia-400 mb-3" />,
      topLabel: "Game & AI",
      topBg: "bg-gradient-to-b from-fuchsia-900/50 to-transparent",
      title: "Chess Game with AI",
      description: "A fully functional chess application developed in Python. It features an intuitive graphical interface, a local two-player mode (1v1), and a challenging single-player mode against an integrated AI opponent.",
      techStack: ["Python", "Pygame", "AI Algorithms", "Game Logic"], 
      techColor: "text-fuchsia-300 bg-fuchsia-900/30 border-fuchsia-700/50",
      githubLink: "https://github.com/mujin0422/ChessGameWithAI",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center mb-12">
          <span className="text-cyan-400 font-mono text-lg md:text-xl mr-3">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projects</h2>
          <div className="ml-6 flex-1 h-px bg-slate-700/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-900/20"
            >
              <div className={`h-48 flex flex-col items-center justify-center ${project.topBg} border-b border-slate-700/50 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                {project.topIcon}
                <span className="font-mono text-sm tracking-widest opacity-80">{project.topLabel}</span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 text-xs font-mono rounded-full border ${project.techColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 mt-auto pt-4 border-t border-slate-700/50 text-slate-400">
                  {/* Để đảm bảo click được 100%, tôi đã nâng thẻ <a> này lên z-20 như đã hướng dẫn trước đó */}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-20 flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  {project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative z-20 flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;