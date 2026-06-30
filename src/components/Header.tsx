import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Moon, Sun, RotateCcw, BarChart3, Gift, Menu, X, 
  Sparkles, Layers, Rocket, MessageSquarePlus, Mail, Info
} from 'lucide-react';

interface HeaderProps {
  isLightMode: boolean;
  toggleLightMode: () => void;
  onReset: () => void;
  openLegalModal: (doc: 'privacy' | 'terms' | 'changelog' | 'stats') => void;
  totalGenerated: number;
}

export const Header: React.FC<HeaderProps> = ({
  isLightMode,
  toggleLightMode,
  onReset,
  openLegalModal,
  totalGenerated
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/', exact: true },
    { name: 'Features', path: '/features' },
    { name: 'QR Generator', path: '/generator', isHighlight: true },
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Contact', path: '/contact' },
  ];

  const isGeneratorPage = currentPath === '/generator';

  return (
    <header className="h-16 md:h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-10 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-40 shrink-0 select-none transition-all">
      {/* Left: Brand Logo */}
      <div className="flex items-center gap-8">
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-90 transition-opacity">
          <Logo size="md" />
        </Link>

        {/* Live counter badge (Desktop) */}
        <div 
          onClick={() => openLegalModal('stats')}
          className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full glass border-emerald-500/30 text-xs text-zinc-400 cursor-pointer hover:border-emerald-500/60 transition-colors shadow-lg shadow-emerald-500/5"
          title="Click to view live anonymous platform telemetry"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span><strong className="text-emerald-400 font-mono font-bold">{totalGenerated.toLocaleString()}</strong> generated</span>
        </div>
      </div>

      {/* Center: Desktop Nav Links */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
        {navLinks.map((link) => {
          const isActive = link.exact ? currentPath === '/' : currentPath.startsWith(link.path);

          if (link.isHighlight) {
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ml-1 mr-1 ${
                  isActive 
                    ? 'accent-gradient text-black shadow-xl shadow-purple-500/30 scale-105' 
                    : 'glass text-purple-200 hover:text-white border-purple-500/40 hover:bg-purple-950/30'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                {link.name}
              </Link>
            );
          }

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all ${
                isActive 
                  ? 'bg-white/10 text-white font-bold border border-white/15' 
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-3">
        
        {/* Telemetry quick open button (Small screens) */}
        <button
          onClick={() => openLegalModal('stats')}
          title="Platform Telemetry"
          className="xl:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
        >
          <BarChart3 className="w-4 h-4 text-emerald-400" />
        </button>

        {/* Changelog Modal */}
        <button
          onClick={() => openLegalModal('changelog')}
          title="Release Changelog"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass hover:bg-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-all border border-white/10"
        >
          <Gift className="w-3.5 h-3.5 text-orange-400" />
          v2.4
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleLightMode}
          title="Toggle Visual Theme"
          className="w-9 h-9 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
        >
          {isLightMode ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
        </button>

        {/* Reset button only on Generator page */}
        {isGeneratorPage && (
          <button
            onClick={onReset}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-orange-300 hover:text-white bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20 transition-all shadow-lg"
            title="Reset QR design customization to sleek default"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Design
          </button>
        )}

        {/* Primary CTA on non-generator page */}
        {!isGeneratorPage && (
          <Link
            to="/generator"
            className="hidden sm:flex px-5 py-2 rounded-full bg-white text-black text-xs md:text-sm font-black hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 active:scale-95 items-center gap-1.5"
          >
            Open Studio
          </Link>
        )}

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-300 hover:text-white border border-white/15 active:scale-95 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 md:top-20 left-0 right-0 bg-[#050505]/95 border-b border-white/15 p-6 flex flex-col gap-3 lg:hidden shadow-2xl backdrop-blur-3xl animate-fadeIn z-50">
          
          <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest px-3 mb-1">
            Navigation Menu
          </div>

          {navLinks.map(link => {
            const isActive = link.exact ? currentPath === '/' : currentPath.startsWith(link.path);
            
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3.5 rounded-2xl text-sm font-bold flex items-center justify-between transition-all ${
                  isActive 
                    ? 'bg-purple-500/20 text-white border border-purple-500/40' 
                    : link.isHighlight 
                      ? 'accent-gradient text-black shadow-xl shadow-purple-500/20' 
                      : 'text-zinc-300 hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  {link.isHighlight && <Sparkles className="w-4 h-4 text-black animate-spin" />}
                  <span>{link.name}</span>
                </div>
                <span className="text-xs font-mono opacity-50">&rarr;</span>
              </Link>
            );
          })}

          <div className="h-px bg-white/10 my-2" />

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => { openLegalModal('stats'); setMobileMenuOpen(false); }}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-emerald-400 flex items-center justify-center gap-2 border border-emerald-500/30"
            >
              <BarChart3 className="w-4 h-4" />
              Live Telemetry
            </button>
            <button
              onClick={() => { openLegalModal('changelog'); setMobileMenuOpen(false); }}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-orange-400 flex items-center justify-center gap-2 border border-orange-500/30"
            >
              <Gift className="w-4 h-4" />
              Changelog v2.4
            </button>
          </div>

          {isGeneratorPage && (
            <button
              onClick={() => { onReset(); setMobileMenuOpen(false); }}
              className="w-full mt-2 py-3 rounded-xl bg-orange-500/20 text-orange-300 font-bold text-xs flex items-center justify-center gap-2 border border-orange-500/40"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Design Customization
            </button>
          )}

        </div>
      )}
    </header>
  );
};
