import React from 'react';
import { Link } from 'react-router-dom';
import founderImage from "../assets/images/founder.jpeg";
import { motion } from 'motion/react';
import { 
  Shield, Cpu, Zap, Lock, Eye, Heart, Sparkles, Rocket, 
  Award, CheckCircle2, ArrowRight, Linkedin, 
  Mail, ExternalLink, Terminal, Code2, UserCheck
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    /* 
      LAYOUT UPDATE (Requirement 4):
      - Removed `overflow-y-auto` to allow the page to expand and scroll at the document/viewport level.
      - Keeps `flex-1` and spacing parameters exactly the same to preserve the design.
    */
    <div className="flex-1 space-y-32 pb-32 pt-12 px-6 md:px-12 max-w-7xl mx-auto animate-fadeIn select-none">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-emerald-500/30 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
          <Rocket className="w-3.5 h-3.5" />
          The Story Behind The Code
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
          Rebuilding Offline Attribution for the <span className="accent-gradient-text">Modern Web</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed select-text">
          Qrix was born out of frustration with predatory QR code tools that bait users with free trials only to ransom printed marketing collateral behind tracking redirects and monthly paywalls.
        </p>
      </div>

      {/* 2. What is Qrix? & Why it was built */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-10 rounded-3xl glass border-white/10 flex flex-col justify-between bg-gradient-to-br from-purple-950/20 via-black to-black space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Code2 className="w-7 h-7" />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">What is Qrix?</span>
            <h2 className="text-3xl font-black text-white">Pure Client-Side Software</h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base select-text">
              Qrix is an independent, enterprise-grade QR code generator that operates entirely within your web browser. Utilizing WebAssembly polynomial calculation, Qrix generates high-resolution static matrix codes directly on your machine without transmitting your payloads to cloud servers.
            </p>
          </div>
        </div>

        <div className="p-10 rounded-3xl glass border-white/10 flex flex-col justify-between bg-gradient-to-br from-emerald-950/20 via-black to-black space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Heart className="w-7 h-7" />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Why it was built</span>
            <h2 className="text-3xl font-black text-white">The Anti-Bait-and-Switch Manifesto</h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base select-text">
              Thousands of small businesses print QR codes on menus and flyers, only to discover weeks later that their QR code "expired" or redirects to an advertising scam unless they pay $30/month. We built Qrix to guarantee that physical static QR codes remain 100% free and functional forever.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Mission & Vision */}
      <div className="p-12 md:p-16 rounded-3xl glass border-white/10 relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-purple-600/20 -top-40 -right-40 blur-[140px] -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 font-mono text-xs font-bold uppercase tracking-wider text-white">
              Our Mission
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">Democratize Vector Attribution</h3>
            <p className="text-zinc-400 text-base leading-relaxed select-text">
              Provide designers, developers, and founders with pristine, resolution-independent vector artwork (SVG/PDF) and deep customization without paywalls or tracking intermediaries.
            </p>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 font-mono text-xs font-bold uppercase tracking-wider text-purple-300">
              Our Vision
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">The Universal Bridge</h3>
            <p className="text-zinc-400 text-base leading-relaxed select-text">
              Become the default internet standard for connecting physical offline artifacts to online digital experiences with absolute speed, security, and aesthetic elegance.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Core Pillars: Privacy, Performance, Security */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Architectural Pillars</h2>
          <p className="text-zinc-400 mt-2">Built to the rigorous standards of high-growth tech enterprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl glass-card border-white/10 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Privacy by Default</h3>
            <p className="text-zinc-400 text-sm leading-relaxed select-text">
              Zero telemetry harvesting of your destination links. We never store encoded URLs, vCards, or WiFi credentials on our servers. Your data stays in your browser memory.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card border-white/10 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Sub-Millisecond Speed</h3>
            <p className="text-zinc-400 text-sm leading-relaxed select-text">
              Engineered with zero network latency. By compiling matrix Reed-Solomon calculations locally on client devices, exports happen instantly regardless of your internet connection speed.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card border-white/10 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Military-Grade Security</h3>
            <p className="text-zinc-400 text-sm leading-relaxed select-text">
              Unlike dynamic QR shorteners that can be hijacked by bad actors to redirect your customers to phishing sites, Qrix static codes encode physical immutable data structures.
            </p>
          </div>
        </div>
      </div>

      {/* 5. MEET THE FOUNDER SECTION */}
      <section className="pt-16 border-t border-white/10">
        <div className="p-10 sm:p-16 rounded-[40px] glass glow-purple border-purple-500/40 relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-purple-950/30">
          <div className="orb w-[400px] h-[400px] bg-purple-600/30 bottom-0 right-0 blur-[130px]" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            
            {/* Founder Avatar with Glowing Ring (Crop & Glow preserved) */}
            <div className="relative shrink-0 group">
              <div className="absolute -inset-1 rounded-full accent-gradient opacity-75 group-hover:opacity-100 blur-md transition duration-500" />
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#09090b] bg-zinc-900 shadow-2xl flex items-center justify-center">
                <img 
                  src={founderImage} 
                  alt="Anshuman Guleria" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_22%] transition-all duration-500 scale-105 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-2 right-4 px-3 py-1 rounded-full accent-gradient text-black font-extrabold text-[11px] font-mono shadow-lg uppercase tracking-wider">
                Founder
              </div>
            </div>

            {/* Founder Bio */}
            <div className="space-y-6 text-center lg:text-left flex-1">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 inline-block mb-3">
                  Meet the Builder
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Anshuman Guleria</h2>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2 text-sm font-mono text-zinc-400">
                  <span className="text-purple-300 font-bold">Founder of Kasvion</span>
                  <span>•</span>
                  <span className="text-emerald-300 font-bold">Creator of Qrix</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl font-normal select-text">
                Qrix is an independent product built by Anshuman Guleria with the goal of making QR generation faster, simpler and more accessible for everyone. Passionate about building modern internet products that solve everyday problems through elegant software and thoughtful design.
              </p>

              {/* Founder Social CTA Links (Requirements 2, 3 & 4: LinkedIn updated, GitHub & Portfolio removed, email preserved) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/anshuman-guleria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full glass hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all border border-white/15 flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>

                <a 
                  href="mailto:anshumanguleria305@gmail.com" 
                  className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 font-extrabold text-xs md:text-sm transition-all flex items-center gap-2 shadow-lg shadow-white/10 active:scale-95"
                >
                  <Mail className="w-4 h-4 text-black" />
                  Email Founder
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <div className="text-center pt-12">
        <Link
          to="/generator"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full accent-gradient text-black font-black text-lg shadow-2xl shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all group"
        >
          Launch QR Studio Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};
