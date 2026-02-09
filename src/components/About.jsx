import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-12 relative">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600">
              <User size={14} />
              <span className="text-xs font-semibold uppercase tracking-wider">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Transforming Ideas into <span className="text-indigo-600">Digital Reality</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
              I am a Mobile Application Developer with around 3.6 years of experience, specializing in Flutter. 
              My background in Computer Science and current pursuit of an MSc in IT with AI specialization 
              fuels my passion for building high-tech solutions. I strive to work in creative environments 
              where I can realize my potential and contribute to challenging projects.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">3.6+</h4>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">10+</h4>
                <p className="text-sm text-slate-500">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="w-full md:w-1/3 aspect-square relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-2xl rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
               {/* Placeholder for Profile Image */}
               <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                 <User size={64} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
