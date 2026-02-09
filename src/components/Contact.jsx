import React from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-12">
      <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Info Side */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's work together!</h2>
              <p className="text-indigo-100 opacity-90 mb-8">
                I'm currently available for freelance projects and full-time roles.
                Reach out and let's discuss your next project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-indigo-100">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <Mail size={18} />
                   </div>
                   <span>lama.gurung.nabin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-100">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <Phone size={18} />
                   </div>
                   <span>+977-9846458568</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-100">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <MapPin size={18} />
                   </div>
                   <span>Mitranagar, Samakhusi, Kathmandu</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <div className="flex gap-4">
                 {/* Social Icons Placeholder */}
                 <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
                 <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
                 <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
               </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="p-10 bg-white md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
