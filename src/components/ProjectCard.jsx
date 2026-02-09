import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, category, tags, color }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-slate-100">
      {/* Image Area - Placeholder for now, using gradient */}
      <div className={`h-64 w-full bg-gradient-to-br ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
        {/* Mock Content inside card image */}
        <div className="absolute inset-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">{category}</span>
            <h3 className="text-xl font-bold text-slate-800 mt-1 group-hover:text-indigo-600 transition-colors">{title}</h3>
          </div>
          <div className="p-2 bg-slate-50 rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
            <ExternalLink size={18} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
