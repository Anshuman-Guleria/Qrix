import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Clock, Sparkles, Rocket, ArrowRight, 
  Layers, Cpu, Shield, Zap, RefreshCw, GitCommit, GitPullRequest, GitBranch
} from 'lucide-react';

export const Roadmap: React.FC = () => {
  const completedItems = [
    { title: 'ISO Level H Matrix Core', desc: 'Locally computed Reed-Solomon redundancy reserving 30% damage tolerance for safe center logo carving.', date: 'Q1 2025' },
    { title: 'Vector SVG & PDF Engine', desc: 'Resolution-independent vector exporting pipeline supporting up to billboard scaling dimensions.', date: 'Q2 2025' },
    { title: '19 Specialized Payload Schemas', desc: 'Support for WPA WiFi networks, vCard 4.0 contact cards, Solana/Ethereum crypto wallets, and iCal events.', date: 'Q3 2025' },
    { title: 'Linear & Radial Gradient Stylizer', desc: 'Custom multi-stop CSS gradient mapping onto canvas pixel buffers with customizable eye frames.', date: 'Q4 2025' }
  ];

  const currentItems = [
    { title: 'Enterprise Multi-Page SaaS Architecture', desc: 'Transitioning from single-page scroll layout into Vercel/Linear quality dedicated product routing.', progress: '95%' },
    { title: 'Real-Time Firestore Telemetry V2', desc: 'Enhanced anonymous generation counters and local browser analytics dashboards.', progress: '80%' },
    { title: 'Batch CSV Generator Pipeline', desc: 'Ability to upload CSV spreadsheets and export 1,000 customized QR SVG badges simultaneously in a single ZIP.', progress: '45%' }
  ];

  const futureItems = [
    { title: 'AI Studio Smart Color Matcher', desc: 'Automatic extraction of dominant brand hex palettes from uploaded company logos using machine learning.', quarter: 'Q3 2026' },
    { title: 'Figma & Raycast Native Plugins', desc: 'Generate Qrix vector QR codes directly inside your Figma design files or MacOS Spotlight command bar.', quarter: 'Q4 2026' },
    { title: 'Self-Hosted Docker Enterprise Container', desc: 'Air-gapped on-premise deployment image for high-security banking and government intranet networks.', quarter: '2027' }
  ];

  return (
    /* 
      LAYOUT UPDATE (Requirement 4):
      - Removed `overflow-y-auto` to allow the page to expand and scroll at the document/viewport level.
      - Keeps `flex-1` and spacing parameters exactly the same to preserve the design.
    */
    <div className="flex-1 space-y-32 pb-32 pt-12 px-6 md:px-12 max-w-5xl mx-auto animate-fadeIn select-none">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-orange-500/30 text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
          <GitBranch className="w-3.5 h-3.5" />
          Product Evolution
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
          The Qrix Engineering <span className="accent-gradient-text">Roadmap</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed select-text">
          Explore what we have shipped, what our engineering team is actively building today, and where our architectural platform is heading.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-24 pl-8 md:pl-16">
        
        {/* SECTION 1: CURRENTLY IMPROVING */}
        <div className="relative">
          <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-amber-400 border-4 border-[#050505] shadow-lg shadow-amber-400/50 animate-pulse" />
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              In Active Development • Shipping Now
            </div>
            
            <div className="space-y-6">
              {currentItems.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl glass border-amber-500/30 glow-amber bg-gradient-to-r from-amber-950/20 via-black to-black space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                    <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                      {item.progress}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed select-text">{item.desc}</p>
                  
                  {/* Progress Bar UI */}
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full transition-all duration-1000" style={{ width: item.progress }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: FUTURE PLANS */}
        <div className="relative">
          <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#050505] shadow-lg shadow-purple-500/50" />
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Future Horizon • Up Next
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureItems.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl glass border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-widest">{item.quarter}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-2 select-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: COMPLETED HISTORY */}
        <div className="relative">
          <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#050505] shadow-lg shadow-emerald-500/50" />
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed & Shipped
            </div>
            
            <div className="space-y-4">
              {completedItems.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl glass border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/15 transition-all opacity-80 hover:opacity-100">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-xs md:text-sm text-zinc-400 mt-1 select-text">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full shrink-0 border border-white/5">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="p-12 rounded-3xl glass text-center max-w-3xl mx-auto space-y-6 border-white/10">
        <h3 className="text-2xl font-black text-white">Have a feature request or priority suggestion?</h3>
        <p className="text-zinc-400 text-sm select-text">Our roadmap is driven directly by community feedback and startup founder requests.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/feedback"
            className="px-8 py-4 rounded-full accent-gradient text-black font-black text-sm transition-all shadow-xl shadow-purple-500/20 hover:scale-105"
          >
            Submit Feature Request
          </Link>
          <Link
            to="/generator"
            className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-bold text-sm transition-all border border-white/15"
          >
            Open QR Studio
          </Link>
        </div>
      </div>

    </div>
  );
};
