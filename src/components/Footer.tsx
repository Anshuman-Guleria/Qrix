import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

interface FooterProps {
  openLegalModal: (doc: 'privacy' | 'terms' | 'changelog' | 'stats') => void;
}

export const Footer: React.FC<FooterProps> = ({ openLegalModal }) => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-zinc-500 pt-16 pb-12 px-6 md:px-12 select-none shrink-0 relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
        
        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/">
            <Logo size="sm" />
          </Link>
          <p className="text-xs text-zinc-400 max-w-sm leading-relaxed select-text font-normal">
            Qrix is an independent startup product built by Anshuman Guleria (Kasvion) designed to make high-resolution static QR code generation frictionless, vector-native, and private by default.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All distributed WASM generation nodes operational</span>
          </div>
        </div>

        {/* Product Col */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">Product</span>
          <div className="flex flex-col space-y-2 text-xs text-zinc-400">
            <Link to="/generator" className="hover:text-purple-300 transition-colors">QR Studio Workspace</Link>
            <Link to="/features" className="hover:text-purple-300 transition-colors">All 19 QR Formats</Link>
            <Link to="/roadmap" className="hover:text-purple-300 transition-colors">Engineering Roadmap</Link>
            <button onClick={() => openLegalModal('stats')} className="text-left hover:text-purple-300 transition-colors">Live Telemetry V2</button>
          </div>
        </div>

        {/* Company Col */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">Company</span>
          <div className="flex flex-col space-y-2 text-xs text-zinc-400">
            <Link to="/about" className="hover:text-purple-300 transition-colors">About Qrix & Mission</Link>
            <Link to="/about" className="hover:text-purple-300 transition-colors">Meet Anshuman Guleria</Link>
            <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact Engineering</Link>
          </div>
        </div>

        {/* Legal Col */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">Legal & Security</span>
          <div className="flex flex-col space-y-2 text-xs text-zinc-400">
            <button onClick={() => openLegalModal('privacy')} className="text-left hover:text-purple-300 transition-colors">Privacy Policy</button>
            <button onClick={() => openLegalModal('terms')} className="text-left hover:text-purple-300 transition-colors">Terms of Service</button>
            <button onClick={() => openLegalModal('changelog')} className="text-left hover:text-purple-300 transition-colors">Changelog v2.4</button>
            <span className="text-[11px] text-zinc-600 font-mono pt-1 block">ISO/IEC 18004 Compliant</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-zinc-500">© 2026 Qrix Platform • Built by Anshuman Guleria (Kasvion)</p>
        <div className="flex items-center gap-6 text-zinc-500 font-mono">
          <span>100% Static WASM</span>
          <span>•</span>
          <span>Zero Paywalls</span>
          <span>•</span>
          <span>Zero Redirects</span>
        </div>
      </div>
    </footer>
  );
};
