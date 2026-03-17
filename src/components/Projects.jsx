import React from 'react';
import { Github, ExternalLink, Users, Wand2, Bot } from 'lucide-react';

const Projects = () => {
  // Mảng dữ liệu chứa các dự án để dễ dàng quản lý và thêm bớt sau này
  const projectList = [
    {
      id: 1,
      topIcon: <Users size={32} className="text-indigo-400 mb-3" />,
      topLabel: "HR System",
      topBg: "bg-gradient-to-b from-indigo-900/50 to-transparent",
      title: "Employee Management System",
      description: "A comprehensive internal platform to manage personnel records, featuring seamless add, edit, and delete functionalities with a secure database architecture.",
      techStack: ["PHP", "MySQL", "Tailwind CSS"],
      techColor: "text-indigo-300 bg-indigo-900/30 border-indigo-700/50"
    },
    {
      id: 2,
      topIcon: <Wand2 size={32} className="text-teal-400 mb-3" />,
      topLabel: "VisualFX",
      topBg: "bg-gradient-to-b from-teal-900/50 to-transparent",
      title: "Creative Asset Editor",
      description: "A web-based design tool allowing users to apply custom visual effects to chatbot interfaces and seamlessly process video background removals.",
      techStack: ["React", "Canvas API", "Node.js"],
      techColor: "text-teal-300 bg-teal-900/30 border-teal-700/50"
    },
    {
      id: 3,
      topIcon: <Bot size={32} className="text-fuchsia-400 mb-3" />,
      topLabel: "NeuralChat",
      topBg: "bg-gradient-to-b from-fuchsia-900/50 to-transparent",
      title: "Smart Chat Assistant",
      description: "AI-powered conversational interface with smooth animations, natural language processing, and context-aware responses for customer support.",
      techStack: ["Next.js", "Python", "OpenAI"],
      techColor: "text-fuchsia-300 bg-fuchsia-900/30 border-fuchsia-700/50"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tiêu đề Section */}
        <div className="flex items-center mb-12">
          <span className="text-cyan-400 font-mono text-lg md:text-xl mr-3">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projects</h2>
          <div className="ml-6 flex-1 h-px bg-slate-700/50"></div>
        </div>

        {/* Lưới chứa các dự án */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-900/20"
            >
              
              {/* Nửa trên của Card (Khu vực màu sắc & Icon) */}
              <div className={`h-48 flex flex-col items-center justify-center ${project.topBg} border-b border-slate-700/50 relative overflow-hidden`}>
                {/* Hiệu ứng hover sáng lên nhẹ nhàng */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                {project.topIcon}
                <span className="font-mono text-sm tracking-widest opacity-80">{project.topLabel}</span>
              </div>

              {/* Nửa dưới của Card (Nội dung chi tiết) */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
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

                {/* Links (Code & Live) */}
                <div className="flex items-center gap-5 mt-auto pt-4 border-t border-slate-700/50 text-slate-400">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors">
                    <Github size={16} />
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors">
                    <ExternalLink size={16} />
                    Live
                  </a>
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