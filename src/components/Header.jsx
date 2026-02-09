import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 py-4 px-6 md:px-12 flex justify-between items-center z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg text-sm">
          N
        </div>
        <span className="font-bold text-slate-800 tracking-tight text-lg">Nabin.dev</span>
      </div>
      
      <div>
        <div className="bg-emerald-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100 flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-default">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse box-shadow-glowing"></div>
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Open to work</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
