import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800 relative overflow-hidden">
      
      {/* Hiệu ứng ánh sáng nền ở góc */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Tiêu đề Section */}
        <div className="flex items-center mb-6">
          <span className="text-cyan-400 font-mono text-lg md:text-xl mr-3">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Get In Touch</h2>
          <div className="ml-6 flex-1 h-px bg-slate-700/50"></div>
        </div>
        
        <p className="text-slate-400 mb-12 text-lg max-w-2xl">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        {/* Layout 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* CỘT TRÁI: Thông tin liên hệ & Mạng xã hội */}
          <div className="space-y-6">
            
            {/* Card Email */}
            <div className="flex items-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="w-14 h-14 bg-blue-900/30 border border-blue-800/50 text-blue-400 rounded-xl flex items-center justify-center mr-6 shadow-inner">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-cyan-400 font-mono text-sm mb-1">Email</p>
                <p className="text-slate-200 font-medium text-lg">alevannhata@gmail.com</p>
              </div>
            </div>

            {/* Card Điện thoại */}
            <div className="flex items-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="w-14 h-14 bg-cyan-900/30 border border-cyan-800/50 text-cyan-400 rounded-xl flex items-center justify-center mr-6 shadow-inner">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-cyan-400 font-mono text-sm mb-1">Phone</p>
                <p className="text-slate-200 font-medium text-lg">0393092247</p>
              </div>
            </div>

            {/* Nút Mạng xã hội (Social Icons) */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Github size={20} />, link: "#" },
                { icon: <Linkedin size={20} />, link: "#" },
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Globe size={20} />, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="w-12 h-12 flex items-center justify-center bg-slate-800/30 border border-slate-700/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: Form liên hệ */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            {/* Thêm preventDefault để khi bấm Submit trang không bị load lại */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input: Name */}
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" 
                />
              </div>

              {/* Input: Email */}
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" 
                />
              </div>

              {/* Input: Message */}
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Nút Submit */}
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 mt-4"
              >
                <Send size={18} />
                Send Message
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;