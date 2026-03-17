import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tiêu đề Section */}
        <div className="flex items-center mb-12">
          <span className="text-cyan-400 font-mono text-lg md:text-xl mr-3">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
          {/* Đường kẻ ngang */}
          <div className="ml-6 flex-1 h-px bg-slate-700/50"></div>
        </div>

        {/* Layout 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Cột trái: Hình ảnh/Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-square bg-slate-800/40 border border-slate-700/50 rounded-2xl flex items-center justify-center shadow-lg">
              {/* Icon người dùng mô phỏng theo ảnh */}
              <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Vòng tròn viền ngoài */}
                <circle cx="50" cy="50" r="48" stroke="#334155" strokeWidth="1.5"/>
                {/* Phần đầu */}
                <circle cx="50" cy="35" r="16" fill="url(#avatar-grad)"/>
                {/* Phần thân */}
                <path d="M22 85C22 69.536 34.536 57 50 57C65.464 57 78 69.536 78 85" fill="url(#avatar-grad)"/>
                
                {/* Khai báo màu gradient (Xanh dương sang Xanh lơ) */}
                <defs>
                  <linearGradient id="avatar-grad" x1="22" y1="19" x2="78" y2="85" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" /> {/* blue-500 */}
                    <stop offset="1" stopColor="#06b6d4" /> {/* cyan-500 */}
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Cột phải: Nội dung Text & Grid Info */}
          <div className="lg:col-span-7 space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
            <p>
              I'm a full-stack developer with experience crafting scalable web applications and intuitive user interfaces. My journey started with curiosity about how things work on the internet, and it evolved into a deep passion for building products that solve real-world problems.
            </p>
            <p>
              I specialize in PHP, MySQL, and building efficient database-driven architectures. When I'm not writing code for employee management systems, you'll find me exploring graphic design or crafting clean UI compositions.
            </p>

            {/* Khung thông tin chi tiết (Grid 2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              
              {/* Box 1 */}
              <div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                <p className="text-cyan-400 font-mono text-xs mb-1 uppercase tracking-wider">Location</p>
                <p className="text-slate-200 font-semibold">Ho Chi Minh City, VN</p>
              </div>

              {/* Box 2 */}
              <div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                <p className="text-cyan-400 font-mono text-xs mb-1 uppercase tracking-wider">Experience</p>
                <p className="text-slate-200 font-semibold">3+ Years</p>
              </div>

              {/* Box 3 */}
              <div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                <p className="text-cyan-400 font-mono text-xs mb-1 uppercase tracking-wider">Focus</p>
                <p className="text-slate-200 font-semibold">Java</p>
              </div>

              {/* Box 4 */}
              <div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                <p className="text-cyan-400 font-mono text-xs mb-1 uppercase tracking-wider">Status</p>
                <p className="text-emerald-400 font-semibold">Open to Work</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;