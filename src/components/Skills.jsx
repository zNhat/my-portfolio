import React from 'react';
import { Layout, Server, Database } from 'lucide-react';

const Skills = () => {
  // Dữ liệu kỹ năng được chia làm 3 mảng gọn gàng
  const skillCategories = [
    {
      id: 1,
      title: "Frontend & Design",
      icon: <Layout className="text-blue-400 mb-6" size={36} />,
      skills: ["React", "JavaScript ", "Tailwind CSS", "HTML / CSS", "Canva Design"]
    },
    {
      id: 2,
      title: "Backend",
      icon: <Server className="text-purple-400 mb-6" size={36} />,
      skills: ["PHP", "Node.js", "Express", "RESTful APIs", "Authentication"]
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="text-emerald-400 mb-6" size={36} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tiêu đề Section */}
        <div className="flex items-center mb-16">
          <span className="text-cyan-400 font-mono text-lg md:text-xl mr-3">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills</h2>
          <div className="ml-6 flex-1 h-px bg-slate-700/50"></div>
        </div>

        {/* Lưới chứa 3 cột kỹ năng */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-colors duration-300"
            >
              {category.icon}
              <h3 className="text-2xl font-bold text-white mb-8">{category.title}</h3>
              
              {/* Danh sách các thẻ (tags) công cụ */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-slate-900/50 border border-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;