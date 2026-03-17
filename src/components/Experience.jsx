import React from 'react';

const Experience = () => {
  // Dữ liệu dự án theo từng năm
  const experiences = [
    {
      id: 1,
      year: "2026",
      title: "Employee Management System",
      type: "Full-Stack Development",
      description: "Phát triển hệ thống quản lý nhân sự nội bộ hoàn chỉnh. Xử lý kiến trúc cơ sở dữ liệu an toàn, xây dựng các chức năng thêm, sửa, xóa (CRUD) và quản lý phân quyền chặt chẽ.",
      tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 2,
      year: "2025",
      title: "Media & Visual Effects Tools",
      type: "Frontend Integration",
      description: "Xây dựng giao diện tương tác và tích hợp công cụ thiết kế. Xử lý các tác vụ liên quan đến hiệu ứng đồ họa (như tạo viền chatbot, tách nền video) mang lại trải nghiệm mượt mà cho người dùng.",
      tech: ["React", "Canva Design", "CSS Animations"]
    },
    {
      id: 3,
      year: "2024",
      title: "E-Commerce Web Application",
      type: "Web Development",
      description: "Tham gia xây dựng nền tảng thương mại điện tử, tối ưu hóa giao diện người dùng và cải thiện tốc độ tải trang. Kết nối API với hệ thống thanh toán và quản lý giỏ hàng.",
      tech: ["Node.js", "Express", "RESTful API", "HTML/CSS"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tiêu đề Section */}
        <div className="flex items-center mb-20">
          <span className="text-cyan-400 font-mono text-lg md:text-xl mr-3">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
          <div className="ml-6 flex-1 h-px bg-slate-700/50"></div>
        </div>

        {/* Khung chứa Timeline */}
        <div className="relative">
          
          {/* Đường gạch dọc xuyên suốt (Nằm giữa trên Desktop, nằm trái trên Mobile) */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent transform md:-translate-x-1/2"></div>

          {/* Vòng lặp hiển thị các dự án */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 !== 0; // Chẵn thì nằm trái, lẻ thì nằm phải (trên Desktop)

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12 md:mb-24">
                
                {/* Chấm tròn mốc thời gian */}
                <div className="absolute left-[15px] md:left-1/2 top-[24px] md:top-1/2 transform md:-translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 z-10 shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>

                {/* Năm hiển thị cho Mobile (nằm trên card) */}
                <div className="md:hidden pl-12 w-full text-cyan-400 font-mono text-sm mb-2 mt-1.5">
                  {exp.year}
                </div>

                {/* CỘT TRÁI */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16">
                  {isLeft ? (
                    // Card hiển thị bên Trái
                    <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all shadow-lg md:text-right group">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                      <p className="text-blue-400 font-mono text-sm mt-1 mb-3">{exp.type}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                      {/* Tags công nghệ căn phải */}
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-900/80 border border-slate-700 text-slate-300 rounded text-xs font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Nếu là lượt nằm Phải, thì Cột Trái hiển thị Năm
                    <div className="hidden md:flex justify-end items-center h-full text-slate-500 font-mono text-2xl pr-8 hover:text-cyan-400 transition-colors cursor-default">
                      {exp.year}
                    </div>
                  )}
                </div>

                {/* CỘT PHẢI */}
                <div className="w-full md:w-1/2 pl-12 md:pl-16 mt-2 md:mt-0">
                  {!isLeft ? (
                    // Card hiển thị bên Phải
                    <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all shadow-lg text-left group">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                      <p className="text-blue-400 font-mono text-sm mt-1 mb-3">{exp.type}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                      {/* Tags công nghệ căn trái */}
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-900/80 border border-slate-700 text-slate-300 rounded text-xs font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Nếu là lượt nằm Trái, thì Cột Phải hiển thị Năm
                    <div className="hidden md:flex justify-start items-center h-full text-slate-500 font-mono text-2xl pl-8 hover:text-cyan-400 transition-colors cursor-default">
                      {exp.year}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;