import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: { box: 'w-7 h-7 rounded-lg', text: 'text-base', q: 'text-sm' },
    md: { box: 'w-9 h-9 rounded-xl', text: 'text-xl', q: 'text-lg' },
    lg: { box: 'w-12 h-12 rounded-2xl', text: 'text-2xl', q: 'text-xl' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric QR-inspired Q Icon */}
      <div className={`${sizeClasses.box} relative bg-gradient-to-br from-purple-500 via-emerald-400 to-orange-500 p-[1.5px] shadow-lg shadow-purple-500/20 shrink-0 overflow-hidden group`}>
        <div className="w-full h-full bg-[#09090b] rounded-[inherit] flex items-center justify-center relative overflow-hidden">
          {/* QR Matrix Corner Dots simulation inside logo */}
          <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-sm bg-purple-400" />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-sm bg-emerald-400" />
          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-sm bg-orange-400" />
          
          {/* Main Q Letter */}
          <span className={`font-black font-mono tracking-tighter text-white ${sizeClasses.q} relative z-10 translate-x-[0.5px] -translate-y-[0.5px]`}>
            Q
          </span>
          
          {/* QR Q tail slash simulation */}
          <div className="absolute bottom-1 right-1 w-2 h-0.5 bg-gradient-to-r from-emerald-400 to-orange-400 rotate-45 rounded-full" />
        </div>
      </div>

      {variant === 'full' && (
        <div className="flex items-center gap-1.5 tracking-tight">
          <span className={`font-extrabold text-white ${sizeClasses.text} group-hover:text-purple-200 transition-colors`}>
            Qrix
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-purple-300 font-semibold uppercase tracking-wider">
            Pro
          </span>
        </div>
      )}
    </div>
  );
};
