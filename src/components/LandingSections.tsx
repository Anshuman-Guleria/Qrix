import React from 'react';
import { motion } from 'motion/react';
import { QR_TYPES } from '../data/qrTypes';
import { FAQItem } from '../types';
import { 
  Sparkles, Zap, Shield, Download, Palette, Globe, CheckCircle2, 
  ArrowRight, HelpCircle, ChevronDown, ChevronUp, Star, Layers, 
  HeartHandshake, Smartphone
} from 'lucide-react';

interface LandingSectionsProps {
  onStartGenerating: () => void;
  faqList: FAQItem[];
}

export const LandingSections: React.FC<LandingSectionsProps> = ({ onStartGenerating, faqList }) => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="flex-1 overflow-y-auto space-y-24 pb-24 animate-fadeIn">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-28 px-6 md:px-12 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="orb w-[500px] h-[500px] bg-purple-600 top-0 left-1/2 -translate-x-1/2 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-purple-500/30 text-xs font-semibold text-purple-300 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
          <span>Sleek Instant SaaS Platform • Zero Sign-Up Required</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]"
        >
          Generate Beautiful QR Codes <span className="accent-gradient-text">Instantly</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-400 max-w-2xl mt-6 leading-relaxed"
        >
          Open Qrix, customize high-res vector QR codes with gradients and logos, download in one click, and leave within seconds. No accounts, no paywalls, no tracking.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={onStartGenerating}
            className="px-8 py-4 rounded-full accent-gradient text-black font-extrabold text-base shadow-2xl shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            Launch QR Studio Workspace
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <a
            href="#types"
            className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold text-base transition-all"
          >
            Explore 19 QR Types
          </a>
        </motion.div>

        {/* Brand Comparable Proof Bar */}
        <div className="mt-16 pt-10 border-t border-white/5 w-full flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Designed with the craft standards of</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-600 font-bold text-lg md:text-xl tracking-tight select-none">
            <span className="hover:text-zinc-400 transition-colors">LINEAR</span>
            <span className="hover:text-zinc-400 transition-colors">RAYCAST</span>
            <span className="hover:text-zinc-400 transition-colors">VERCEL</span>
            <span className="hover:text-zinc-400 transition-colors">FRAMER</span>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Core Platform Advantages</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Why Qrix is Built Different</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
              title: 'Lightning Fast 1-Click Export',
              desc: 'No loading screens, no email traps, and no multi-step wizard delays. Export directly to PNG, SVG, JPEG or PDF.'
            },
            {
              icon: Palette,
              color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
              title: 'Sleek Glassmorphic Styling',
              desc: 'Infuse your QR codes with vibrant multi-stop gradients, custom corner eye frames, rounded dot pupils, and centered brand logos.'
            },
            {
              icon: Shield,
              color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
              title: 'Zero Login & Privacy Native',
              desc: 'We never store your QR content or redirect your scanners through tracking links. What you generate stays local and static.'
            }
          ].map((feat, i) => (
            <div key={i} className="p-8 rounded-3xl glass-card border-white/10 hover:border-white/25 transition-all flex flex-col items-start gap-4 group">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feat.color} group-hover:scale-110 transition-transform`}>
                <feat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mt-2">{feat.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORTED QR TYPES SHOWCASE */}
      <section id="types" className="max-w-7xl mx-auto px-6 md:px-12 bg-black/40 py-20 rounded-3xl border border-white/5 relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-emerald-600 top-10 right-10" />
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Comprehensive Coverage</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">19 Specialized QR Generators</h3>
          <p className="text-sm text-zinc-400 mt-3">From digital business cards (vCard 3.0) to cryptocurrency payment addresses.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 relative z-10">
          {QR_TYPES.map((type) => (
            <div 
              key={type.id}
              onClick={onStartGenerating}
              className="p-4 rounded-2xl glass hover:bg-white/10 border-white/10 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg accent-gradient text-black flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                ✓
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-white block truncate">{type.name}</span>
                <span className="text-[10px] text-zinc-500 block truncate">{type.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">Frictionless Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">How Qrix Works in 3 Seconds</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { step: '01', title: 'Pick QR Type', desc: 'Select Website URL, WiFi, vCard, WhatsApp, or any of our 19 formats.' },
            { step: '02', title: 'Customize Sleek Style', desc: 'Choose matte dark colors, purple/emerald gradients, dot patterns and upload your logo.' },
            { step: '03', title: '1-Click Vector Export', desc: 'Download instantly as PNG, SVG vector, or PDF without watermark.' }
          ].map((st, i) => (
            <div key={i} className="p-8 rounded-3xl glass border-white/10 relative flex flex-col items-start gap-3">
              <span className="text-4xl font-black font-mono text-purple-500/30">{st.step}</span>
              <h4 className="text-lg font-bold text-white">{st.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div 
                key={i} 
                className="rounded-2xl glass border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white hover:text-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-purple-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="p-12 md:p-16 rounded-[40px] glass glow-purple border-purple-500/30 relative overflow-hidden flex flex-col items-center">
          <div className="orb w-[300px] h-[300px] bg-purple-500 -top-20 -right-20" />
          <h3 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
            Ready to generate your QR code right now?
          </h3>
          <p className="text-zinc-400 mt-4 max-w-xl">
            No signup forms. No spam. 100% free high-resolution exports.
          </p>
          <button
            onClick={onStartGenerating}
            className="mt-8 px-10 py-4 rounded-full accent-gradient text-black font-extrabold text-base shadow-2xl hover:scale-105 transition-transform"
          >
            Create Free QR Code Instantly
          </button>
        </div>
      </section>
    </div>
  );
};
