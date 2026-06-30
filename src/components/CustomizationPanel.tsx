import React from 'react';
import { QRCodeCustomization, DotType, CornerSquareType, CornerDotType, ErrorCorrectionLevel } from '../types';
import { Palette, Sparkles, Sliders, Eye, Upload, Trash2, Check } from 'lucide-react';

interface CustomizationPanelProps {
  custom: QRCodeCustomization;
  onChange: (newCustom: Partial<QRCodeCustomization>) => void;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ custom, onChange }) => {
  const [activeSection, setActiveSection] = React.useState<'shapes' | 'colors' | 'eyes' | 'logo' | 'config'>('shapes');

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onChange({ logoUrl: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      {/* Sleek Tabs */}
      <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 gap-1 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveSection('shapes')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeSection === 'shapes' ? 'bg-white/15 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Shapes
        </button>
        <button
          onClick={() => setActiveSection('colors')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeSection === 'colors' ? 'bg-white/15 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Colors
        </button>
        <button
          onClick={() => setActiveSection('eyes')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeSection === 'eyes' ? 'bg-white/15 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Eyes
        </button>
        <button
          onClick={() => setActiveSection('logo')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeSection === 'logo' ? 'bg-white/15 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Logo
        </button>
        <button
          onClick={() => setActiveSection('config')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            activeSection === 'config' ? 'bg-white/15 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Specs
        </button>
      </div>

      {/* SHAPES */}
      {activeSection === 'shapes' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-3">Module Pattern</span>
            <div className="grid grid-cols-3 gap-2.5">
              {(['square', 'dots', 'rounded', 'classy', 'classy-rounded', 'extra-rounded'] as DotType[]).map((style) => (
                <button
                  key={style}
                  onClick={() => onChange({ dotsStyle: style })}
                  className={`p-3 rounded-xl glass border transition-all flex flex-col items-center gap-2 ${
                    custom.dotsStyle === style 
                      ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 glow-emerald' 
                      : 'border-white/10 hover:border-white/20 text-zinc-400'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1.5 border border-white/10">
                    <div className={`w-full h-full bg-current ${
                      style === 'dots' ? 'rounded-full' :
                      style === 'rounded' ? 'rounded-md' :
                      style === 'extra-rounded' ? 'rounded-full' :
                      style === 'classy-rounded' ? 'rounded-tr-lg rounded-bl-lg' :
                      'rounded-none'
                    }`} />
                  </div>
                  <span className="text-[10px] font-semibold capitalize">{style.replace('-', ' ')}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-3">Corner Frame (Outer Eye)</span>
            <div className="grid grid-cols-3 gap-2.5">
              {(['square', 'dot', 'extra-rounded'] as CornerSquareType[]).map((sq) => (
                <button
                  key={sq}
                  onClick={() => onChange({ cornerSquareStyle: sq })}
                  className={`py-2.5 rounded-xl text-xs font-medium capitalize border transition-all ${
                    custom.cornerSquareStyle === sq
                      ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                      : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  {sq === 'dot' ? 'Circle' : sq.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-3">Corner Pupil (Inner Dot)</span>
            <div className="grid grid-cols-2 gap-2.5">
              {(['square', 'dot'] as CornerDotType[]).map((dt) => (
                <button
                  key={dt}
                  onClick={() => onChange({ cornerDotStyle: dt })}
                  className={`py-2.5 rounded-xl text-xs font-medium capitalize border transition-all ${
                    custom.cornerDotStyle === dt
                      ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                      : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  {dt === 'dot' ? 'Rounded Dot' : 'Sharp Square'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* COLORS & GRADIENTS */}
      {activeSection === 'colors' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Quick Sleek Presets */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-3">Sleek Palette Presets</span>
            <div className="grid grid-cols-4 gap-2">
              {[
                { name: 'Purple Neon', c1: '#a855f7', c2: '#ec4899', grad: true },
                { name: 'Emerald Cyber', c1: '#10b981', c2: '#3b82f6', grad: true },
                { name: 'Sunset Amber', c1: '#f97316', c2: '#eab308', grad: true },
                { name: 'Pure White', c1: '#ffffff', c2: '#ffffff', grad: false }
              ].map((p) => (
                <button
                  key={p.name}
                  onClick={() => onChange({ 
                    foregroundColor: p.c1, 
                    gradientColor2: p.c2, 
                    useGradient: p.grad 
                  })}
                  className="p-2 rounded-xl glass border border-white/10 hover:border-white/30 flex flex-col items-center gap-1.5 group"
                >
                  <div 
                    className="w-full h-6 rounded-lg" 
                    style={{
                      background: p.grad ? `linear-gradient(135deg, ${p.c1}, ${p.c2})` : p.c1
                    }} 
                  />
                  <span className="text-[10px] text-zinc-400 group-hover:text-white truncate w-full text-center font-medium">
                    {p.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Gradient Switch */}
          <div className="flex items-center justify-between p-3.5 rounded-xl glass border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-zinc-200">Enable Vibrant Gradient</span>
            </div>
            <input
              type="checkbox"
              checked={custom.useGradient}
              onChange={(e) => onChange({ useGradient: e.target.checked })}
              className="rounded bg-white/10 border-white/20 text-purple-500 focus:ring-0 w-4 h-4 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 block">{custom.useGradient ? 'Color 1 (Start)' : 'Foreground Color'}</label>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
                <input
                  type="color"
                  value={custom.foregroundColor}
                  onChange={(e) => onChange({ foregroundColor: e.target.value })}
                  className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0 p-0"
                />
                <input
                  type="text"
                  value={custom.foregroundColor}
                  onChange={(e) => onChange({ foregroundColor: e.target.value })}
                  className="w-full bg-transparent text-xs font-mono text-zinc-200 uppercase focus:outline-none"
                />
              </div>
            </div>

            {custom.useGradient && (
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 block">Color 2 (End)</label>
                <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
                  <input
                    type="color"
                    value={custom.gradientColor2}
                    onChange={(e) => onChange({ gradientColor2: e.target.value })}
                    className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0 p-0"
                  />
                  <input
                    type="text"
                    value={custom.gradientColor2}
                    onChange={(e) => onChange({ gradientColor2: e.target.value })}
                    className="w-full bg-transparent text-xs font-mono text-zinc-200 uppercase focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {custom.useGradient && (
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Gradient Angle</span>
                <span className="text-xs font-mono text-purple-400">{custom.gradientRotation}°</span>
              </div>
              <input
                type="range"
                min={0}
                max={360}
                value={custom.gradientRotation}
                onChange={(e) => onChange({ gradientRotation: Number(e.target.value) })}
                className="w-full accent-purple-500 bg-white/10 h-1.5 rounded-lg cursor-pointer"
              />
            </div>
          )}

          <div className="space-y-3 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-300">Background Fill</span>
              <button
                onClick={() => onChange({ isBgTransparent: !custom.isBgTransparent })}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all border ${
                  custom.isBgTransparent 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                    : 'bg-white/5 border-white/10 text-zinc-400'
                }`}
              >
                {custom.isBgTransparent ? '✓ Transparent PNG' : 'Solid Color'}
              </button>
            </div>

            {!custom.isBgTransparent && (
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
                <input
                  type="color"
                  value={custom.backgroundColor}
                  onChange={(e) => onChange({ backgroundColor: e.target.value })}
                  className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0 p-0"
                />
                <input
                  type="text"
                  value={custom.backgroundColor}
                  onChange={(e) => onChange({ backgroundColor: e.target.value })}
                  className="w-full bg-transparent text-xs font-mono text-zinc-200 uppercase focus:outline-none"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* EYES */}
      {activeSection === 'eyes' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between p-3.5 rounded-xl glass border-white/10">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-zinc-200">Custom Eye Colors</span>
            </div>
            <input
              type="checkbox"
              checked={custom.useCustomEyeColors}
              onChange={(e) => onChange({ useCustomEyeColors: e.target.checked })}
              className="rounded bg-white/10 border-white/20 text-emerald-500 focus:ring-0 w-4 h-4 cursor-pointer"
            />
          </div>

          {custom.useCustomEyeColors ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 block">Outer Frame Color</label>
                <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
                  <input
                    type="color"
                    value={custom.eyeOuterColor}
                    onChange={(e) => onChange({ eyeOuterColor: e.target.value })}
                    className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0 p-0"
                  />
                  <input
                    type="text"
                    value={custom.eyeOuterColor}
                    onChange={(e) => onChange({ eyeOuterColor: e.target.value })}
                    className="w-full bg-transparent text-xs font-mono text-zinc-200 uppercase focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 block">Inner Dot Color</label>
                <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
                  <input
                    type="color"
                    value={custom.eyeInnerColor}
                    onChange={(e) => onChange({ eyeInnerColor: e.target.value })}
                    className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0 p-0"
                  />
                  <input
                    type="text"
                    value={custom.eyeInnerColor}
                    onChange={(e) => onChange({ eyeInnerColor: e.target.value })}
                    className="w-full bg-transparent text-xs font-mono text-zinc-200 uppercase focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs text-zinc-500 bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
              When disabled, corner eyes inherit the main foreground color or vibrant gradient automatically.
            </p>
          )}
        </div>
      )}

      {/* LOGO */}
      {activeSection === 'logo' && (
        <div className="space-y-6 animate-fadeIn">
          {custom.logoUrl ? (
            <div className="p-4 rounded-2xl glass border border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={custom.logoUrl} alt="Logo preview" className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1 border border-white/10" />
                <div>
                  <span className="text-xs font-bold text-white block">Embedded Brand Logo</span>
                  <span className="text-[10px] text-emerald-400">Centered in QR canvas</span>
                </div>
              </div>
              <button
                onClick={() => onChange({ logoUrl: undefined })}
                className="p-2 rounded-xl bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
                title="Remove logo"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-white/15 hover:border-purple-500/50 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-all group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-zinc-200">Upload Brand Icon / PNG Logo</span>
              <span className="text-[10px] text-zinc-500 mt-1">Recommended: PNG or SVG with transparent backdrop</span>
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
            </label>
          )}

          {custom.logoUrl && (
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Logo Scale</span>
                  <span className="text-xs font-mono text-purple-400">{Math.round(custom.logoSize * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.15}
                  max={0.4}
                  step={0.05}
                  value={custom.logoSize}
                  onChange={(e) => onChange({ logoSize: Number(e.target.value) })}
                  className="w-full accent-purple-500 bg-white/10 h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl glass border-white/10">
                <span className="text-xs text-zinc-300">Clean Buffer Behind Logo</span>
                <input
                  type="checkbox"
                  checked={custom.hideBehindLogo}
                  onChange={(e) => onChange({ hideBehindLogo: e.target.checked })}
                  className="rounded bg-white/10 border-white/20 text-purple-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* SPECS */}
      {activeSection === 'config' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-3">Error Correction Level</span>
            <div className="grid grid-cols-4 gap-2">
              {(['L', 'M', 'Q', 'H'] as ErrorCorrectionLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => onChange({ errorCorrectionLevel: level })}
                  className={`py-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-0.5 ${
                    custom.errorCorrectionLevel === level
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  <span>{level}</span>
                  <span className="text-[9px] font-normal opacity-75">
                    {level === 'L' && '7%'}
                    {level === 'M' && '15%'}
                    {level === 'Q' && '25%'}
                    {level === 'H' && '30%'}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-zinc-500 mt-2">
              Higher error correction allows QR codes to remain readable even if up to 30% damaged or obscured by a logo.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">Quiet Zone Margin (Padding)</span>
              <span className="text-xs font-mono text-purple-400">{custom.margin}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={40}
              step={5}
              value={custom.margin}
              onChange={(e) => onChange({ margin: Number(e.target.value) })}
              className="w-full accent-purple-500 bg-white/10 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">Export Canvas Resolution</span>
              <span className="text-xs font-mono text-emerald-400">{custom.size} × {custom.size} px</span>
            </div>
            <input
              type="range"
              min={300}
              max={2000}
              step={100}
              value={custom.size}
              onChange={(e) => onChange({ size: Number(e.target.value) })}
              className="w-full accent-emerald-500 bg-white/10 h-1.5 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-zinc-500">Vector exports (SVG/PDF) remain infinitely crisp at any dimension.</span>
          </div>
        </div>
      )}
    </div>
  );
};
