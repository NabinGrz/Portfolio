'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  ArrowUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dark Charcoal Contact Block */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden border border-slate-800"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Column: Let's Talk & Direct Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Inquiry</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Let's Talk!
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Have a mobile app project in mind, need architectural consulting, or want to discuss full-time/contract engineering roles? Reach out directly.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email 1-click copy */}
              <div
                onClick={handleCopyEmail}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 cursor-pointer hover:border-slate-600 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-orange-400 transition truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-xl bg-orange-500/20 text-orange-300 text-xs font-bold flex items-center gap-1.5 shrink-0 group-hover:bg-orange-500 group-hover:text-slate-950 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Phone Call */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-600 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Direct Phone / WhatsApp</span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-blue-400 transition">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-white transition">
                  Call &rarr;
                </span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Base Location</span>
                  <span className="text-sm font-medium text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Follow icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Thanks for reaching out! I will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-full bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-black text-white">
                    Send a Message
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your mobile app project, requirements, or goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition shadow-lg active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar inside card */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-black text-white tracking-wider">NABIN GURUNG</span>
            <span>&bull;</span>
            <span>Mobile Application Engineer</span>
          </div>

          <div className="flex items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Nabin Gurung. All Rights Reserved.</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
