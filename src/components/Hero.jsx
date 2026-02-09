import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between pt-32 pb-32 px-4 md:px-12 relative overflow-hidden">
      {/* Content */}
      <div className="flex-1 max-w-xl text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 mb-6">
          <span className="text-sm font-medium">📱 Flutter Developer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">Nabin</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
          I craft beautiful, production-ready mobile applications with Flutter. Turning ideas into pixel-perfect, performant apps.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#contact" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors group shadow-lg shadow-indigo-200">
            Hire Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#projects" className="bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md px-6 py-3 rounded-full font-medium transition-all">
            View Work
          </a>
        </div>
      </div>

      {/* Visual / Mockup Placeholder */}
      <div className="flex-1 relative hidden md:flex justify-end items-center">
        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500 overflow-hidden ring-1 ring-slate-900/50">
           {/* Mockup Screen Content */}
           <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-20 absolute inset-0"></div>
           <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-xl">
             App Showcase
           </div>
           
           {/* Floating elements for depth */}
           <div className="absolute top-20 left-4 right-4 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4">
              <div className="w-12 h-12 rounded-full bg-white/20 mb-2"></div>
              <div className="h-2 w-2/3 bg-white/20 rounded mb-2"></div>
              <div className="h-2 w-1/2 bg-white/10 rounded"></div>
           </div>
        </div>
        
        {/* Glow effect behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowRight className="rotate-90" size={20} />
      </div>
    </section>
  );
};

export default Hero;
