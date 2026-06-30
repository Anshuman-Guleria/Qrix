import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { QR_TYPES } from '../data/qrTypes';
import { FAQItem, QRTypeID } from '../types';
import { 
  Sparkles, Zap, Shield, Palette, ArrowRight, CheckCircle2, 
  ChevronDown, ChevronUp, Star, Layers, Smartphone, Globe, 
  Award, Cpu, Lock, Terminal, HeartHandshake, Eye, BarChart3
} from 'lucide-react';

interface HomeProps {
  faqList: FAQItem[];
  onSelectType: (id: QRTypeID) => void;
}

export const Home: React.FC<HomeProps> = ({ faqList, onSelectType }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredTypes: QRTypeID[] = ['url', 'wifi', 'vcard', 'whatsapp', 'crypto', 'calendar', 'appstore', 'maps'];

  return (
    /* 
      LAYOUT UPDATE (Requirement 4):
      - Removed `overflow-y-auto` to allow the page to expand and scroll at the document/viewport level.
      - Keeps `flex-1` and spacing parameters exactly the same to preserve the design.
    */
    <div className="flex-1 space-y-32 pb-32 pt-8 animate-fadeIn select-none">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-24 px-6 md:px-12 text-center max-w-6xl mx-auto flex flex-col items-center">
        <div className="orb w-[600px] h-[600px] bg-purple-600/40 top-0 left-1/2 -translate-x-1/2 -z-10 blur-[130px]" />
        <div className="orb w-[400px] h-[400px] bg-emerald-600/30 top-32 right-1/4 -z-10 blur-[120px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-purple-500/40 text-xs font-semibold text-purple-200 mb-8 shadow-xl shadow-purple-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
          <span className="tracking-wide uppercase text-[11px]">Sleek Enterprise SaaS Platform • Zero Login Required</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-5xl leading-[1.05]"
        >
          Generate Premium QR Codes <span className="accent-gradient-text">Instantly</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mt-8 leading-relaxed font-normal select-text"
        >
          Customize high-resolution vector QR codes with multi-stop gradients, eye frames, and carved logo buffers. Download in 1-click in SVG, PDF or PNG. <span className="text-zinc-200 font-medium">No sign-ups, zero paywalls, zero tracking redirects.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12 w-full sm:w-auto"
        >
          <Link
            to="/generator"
            className="w-full sm:w-auto px-9 py-4.5 rounded-full accent-gradient text-black font-black text-base md:text-lg shadow-2xl shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
          >
            Open QR Studio Workspace
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/features"
            className="w-full sm:w-auto px-9 py-4.5 rounded-full glass hover:bg-white/10 text-white font-bold text-base md:text-lg transition-all border border-white/15 flex items-center justify-center gap-2"
          >
            <Layers className="w-5 h-5 text-purple-400" />
            Explore 19 QR Types
          </Link>
        </motion.div>

        {/* Feature quick badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-10 text-xs font-mono text-zinc-400"
        >
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Free Forever</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Resolution-Independent Vector</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Client-Side Privacy Native</span>
        </motion.div>

        {/* Brand Comparable Proof Bar */}
        <div className="mt-24 pt-12 border-t border-white/10 w-full flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Engineered to the design craft standards of</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-600 font-black text-lg md:text-2xl tracking-tighter select-none">
            <span className="hover:text-zinc-300 transition-colors cursor-default">LINEAR</span>
            <span className="hover:text-zinc-300 transition-colors cursor-default">STRIPE</span>
            <span className="hover:text-zinc-300 transition-colors cursor-default">VERCEL</span>
            <span className="hover:text-zinc-300 transition-colors cursor-default">FRAMER</span>
            <span className="hover:text-zinc-300 transition-colors cursor-default">NOTION</span>
            <span className="hover:text-zinc-300 transition-colors cursor-default">RAYCAST</span>
          </div>
        </div>
      </section>

      {/* 2. WHY QRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Why Qrix is Built Different</h2>
          <p className="text-zinc-400 text-base md:text-lg mt-4 select-text">Most QR generators trap you in subscription bait-and-switch schemes or route your visitors through slow tracking servers. Qrix is pure software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              color: 'text-amber-400 bg-amber-500/10 border-amber-500/30 group-hover:bg-amber-500/20',
              title: 'Instant 1-Click Export',
              desc: 'No loading spinners, no email capture traps, and zero multi-step wizard delays. Export directly to PNG, SVG vector, or PDF in milliseconds.'
            },
            {
              icon: Palette,
              color: 'text-purple-400 bg-purple-500/10 border-purple-500/30 group-hover:bg-purple-500/20',
              title: 'Sleek Glassmorphic Styling',
              desc: 'Infuse your QR codes with vibrant linear or radial multi-stop gradients, custom corner eye frames, rounded dot pupils, and centered logos.'
            },
            {
              icon: Shield,
              color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 group-hover:bg-emerald-500/20',
              title: 'Zero Login & Privacy Native',
              desc: 'We never store your destination payloads or redirect your scanners through intermediary servers. What you generate stays local and static forever.'
            }
          ].map((feat, i) => (
            <div key={i} className="p-10 rounded-3xl glass-card border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col items-start gap-6 group hover:-translate-y-1 shadow-2xl">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${feat.color} transition-all duration-300 shadow-lg`}>
                <feat.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{feat.title}</h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mt-3 select-text">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT OVERVIEW & CORE BENEFITS (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="orb w-[500px] h-[500px] bg-orange-600/20 bottom-0 left-10 blur-[150px] -z-10" />
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Enterprise Grade Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Engineered for Reliability</h2>
          <p className="text-zinc-400 text-base md:text-lg mt-4 select-text">Every QR matrix generated by Qrix adheres strictly to ISO/IEC 18004 standards, ensuring flawless readability across iOS camera apps, Android scanners, and industrial readers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Large Card 1 */}
          <div className="md:col-span-2 p-10 rounded-3xl glass border-white/10 bg-gradient-to-br from-purple-950/30 to-black relative overflow-hidden flex flex-col justify-between min-h-[300px] group hover:border-purple-500/40 transition-all">
            <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all" />
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">ISO Level H Protection</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mt-2">30% Damage Tolerance</h3>
              <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed select-text">
                Embed your company logo right in the center. Our matrix engine automatically reserves error correction redundancy so even if 30% of the QR code is obscured or weathered outdoors, scanning remains 100% reliable.
              </p>
            </div>
          </div>

          {/* Large Card 2 */}
          <div className="md:col-span-2 p-10 rounded-3xl glass border-white/10 bg-gradient-to-br from-emerald-950/30 to-black relative overflow-hidden flex flex-col justify-between min-h-[300px] group hover:border-emerald-500/40 transition-all">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-all" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Vector SVG & PDF Engine</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mt-2">Scale to Billboard Dimensions</h3>
              <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed select-text">
                Never settle for blurry pixelated screenshots. Download pure vector SVG or print-ready PDF artwork. Whether printed on a tiny 10mm business card or a 50-foot highway billboard, edges stay razor sharp.
              </p>
            </div>
          </div>

          {/* Medium Card 3 */}
          <div className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl glass border-white/10 flex flex-col justify-between hover:border-white/25 transition-all">
            <Lock className="w-8 h-8 text-orange-400 mb-6" />
            <div>
              <h4 className="text-xl font-bold text-white">Forever Functional</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed select-text">Static data encoded directly into physical squares. Zero redirects, zero expiration dates, zero server dependencies.</p>
            </div>
          </div>

          {/* Medium Card 4 */}
          <div className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl glass border-white/10 flex flex-col justify-between hover:border-white/25 transition-all">
            <Eye className="w-8 h-8 text-purple-400 mb-6" />
            <div>
              <h4 className="text-xl font-bold text-white">Custom Eye Frames</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed select-text">Separate colors for outer corner anchors and inner pupils. Choose between sleek rounded, squircle or sharp square geometry.</p>
            </div>
          </div>

          {/* Medium Card 5 */}
          <div className="md:col-span-4 lg:col-span-2 p-8 rounded-3xl glass border-white/10 flex items-center justify-between gap-6 hover:border-white/25 transition-all bg-zinc-950/60">
            <div>
              <span className="text-xs font-mono text-amber-400 font-semibold">100% CLIENT-SIDE COMPUTE</span>
              <h4 className="text-xl font-bold text-white mt-1">Zero Cloud Latency</h4>
              <p className="text-xs text-zinc-400 mt-2 max-w-md select-text">Your browser compiles the Reed-Solomon polynomial math locally in WebAssembly. No network roundtrips required.</p>
            </div>
            <Terminal className="w-12 h-12 text-zinc-600 hidden sm:block shrink-0" />
          </div>
        </div>
      </section>

      {/* 4. FEATURED QR TYPES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              Comprehensive Suite
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Featured QR Generators</h2>
            <p className="text-zinc-400 text-base mt-2">Click any format to launch directly into the studio workspace.</p>
          </div>
          <Link
            to="/features"
            className="text-sm font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 shrink-0 group"
          >
            View all 19 QR formats <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTypes.map(typeId => {
            const typeObj = QR_TYPES.find(t => t.id === typeId);
            if (!typeObj) return null;
            
            return (
              <Link
                key={typeId}
                to="/generator"
                onClick={() => onSelectType(typeId)}
                className="p-6 rounded-3xl glass border-white/10 hover:border-purple-500/50 hover:bg-purple-950/10 transition-all duration-300 flex flex-col justify-between gap-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-purple-500/20 transition-all border border-white/10 group-hover:border-purple-500/40">
                    <span className="font-mono font-bold text-lg">{typeObj.name[0]}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-zinc-400 uppercase tracking-wider">
                    {typeObj.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                    {typeObj.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-purple-400" />
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 select-text">
                    {typeObj.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            3-Step Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">How Qrix Works in Seconds</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { step: '01', title: 'Select Payload Type', desc: 'Choose Website URL, WiFi credentials, vCard contact card, WhatsApp link, or any of our 19 specialized schemas.' },
            { step: '02', title: 'Customize Sleek Style', desc: 'Dial in your exact branding: vivid linear gradients, custom corner eye frames, rounded matrix dots, and uploaded PNG/SVG logo.' },
            { step: '03', title: '1-Click Vector Export', desc: 'Download immediately as crisp PNG, scalable SVG vector art, or print-ready PDF. Zero watermarks and zero signup gates.' }
          ].map((st, i) => (
            <div key={i} className="p-10 rounded-3xl glass border-white/10 relative flex flex-col items-start gap-4 hover:border-white/25 transition-all">
              <div className="flex items-center justify-between w-full border-b border-white/5 pb-6">
                <span className="text-5xl font-black font-mono text-purple-500/40 tracking-tighter">{st.step}</span>
                <div className="w-3 h-3 rounded-full bg-purple-500/40" />
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{st.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed select-text">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Loved by Innovators
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Trusted by Founders & Teams</h2>
          <p className="text-zinc-400 text-base mt-3">See how high-growth startups and global brands leverage Qrix for offline attribution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "We printed Qrix SVG exports on 50,000 retail product packaging boxes. Flawless 100% scan rate across every smartphone camera.",
              author: "Elena Rostova",
              role: "VP Product at Nexa AI",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
            },
            {
              quote: "Finally a QR generator without shady bait-and-switch subscription paywalls or tracking redirects. An essential tool for our field marketing.",
              author: "Marcus Vance",
              role: "Head of Growth at Veloce",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
            },
            {
              quote: "The gradient customization and logo carving buffer zone make our restaurant chain menus look premium and intentional.",
              author: "Chef Hiro Tanaka",
              role: "Founder of Umami District",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
            }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-3xl glass-card border-white/10 flex flex-col justify-between gap-8 hover:border-emerald-500/40 transition-all">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed select-text italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.avatar} alt={t.author} className="w-11 h-11 rounded-full object-cover border border-white/20" />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div 
                key={i} 
                className={`rounded-2xl glass transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-purple-500/50 bg-purple-950/10' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-white hover:text-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-purple-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4 select-text">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <div className="p-12 md:p-24 rounded-[48px] glass glow-purple border-purple-500/40 relative overflow-hidden flex flex-col items-center bg-gradient-to-b from-purple-950/40 via-black to-black shadow-2xl">
          <div className="orb w-[500px] h-[500px] bg-purple-600/40 -top-40 -right-40 blur-[130px]" />
          <div className="orb w-[400px] h-[400px] bg-emerald-600/30 -bottom-40 -left-40 blur-[120px]" />
          
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 mb-6 relative z-10">
            Frictionless Launch
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white max-w-3xl leading-[1.1] relative z-10 tracking-tight">
            Ready to generate your QR code right now?
          </h2>
          <p className="text-zinc-400 text-base md:text-xl mt-6 max-w-2xl relative z-10 leading-relaxed font-normal">
            No signup forms. No spam. 100% free high-resolution exports forever.
          </p>
          
          <Link
            to="/generator"
            className="mt-10 px-10 py-5 rounded-full accent-gradient text-black font-black text-lg shadow-2xl shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all relative z-10 flex items-center gap-3 group"
          >
            Create Free QR Code Instantly
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};
