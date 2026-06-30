import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QR_TYPES, CATEGORIES } from '../data/qrTypes';
import { QRTypeID } from '../types';
import * as Icons from 'lucide-react';
import { ArrowRight, Sparkles, Layers, CheckCircle2, Zap, Shield } from 'lucide-react';

interface FeaturesProps {
  onSelectType: (id: QRTypeID) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onSelectType }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTypes = selectedCategory === 'All' 
    ? QR_TYPES 
    : QR_TYPES.filter(t => t.category === selectedCategory);

  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.QrCode;
    return <IconComponent className="w-6 h-6" />;
  };

  const getDetails = (id: QRTypeID) => {
    switch (id) {
      case 'url':
        return {
          purpose: 'Connect scanners instantly to web pages, e-commerce stores, or marketing funnels.',
          useCase: 'Product packaging, billboards, shop window displays, and social ads.',
          benefits: ['ISO Level H error correction', 'UTM tracking friendly', 'Instant mobile browser opening']
        };
      case 'wifi':
        return {
          purpose: 'Allow guests and customers to join your WPA/WEP WiFi network without password typing.',
          useCase: 'Cafes, hotel rooms, coworking spaces, Airbnb rentals, and conference badges.',
          benefits: ['Encrypted WPA/WPA2 support', 'Hidden SSID capability', 'Zero password friction']
        };
      case 'vcard':
        return {
          purpose: 'Share a comprehensive digital business card directly into smartphone address books.',
          useCase: 'Networking events, real estate signs, email signatures, and corporate ID badges.',
          benefits: ['Encodes name, phone, email & company', '1-Click iOS/Android save', 'Offline native payload']
        };
      case 'whatsapp':
        return {
          purpose: 'Initiate a direct WhatsApp customer support or sales chat with pre-filled greeting text.',
          useCase: 'Restaurant takeout menus, real estate listings, customer service tags.',
          benefits: ['Pre-populates custom message', 'Bypasses phone number typing', 'High conversion rate']
        };
      case 'crypto':
        return {
          purpose: 'Receive decentralized crypto payments directly to your wallet address with specified amounts.',
          useCase: 'POS checkout counters, invoice footers, tip jars, and charity fundraisers.',
          benefits: ['Supports BTC, ETH, SOL & USDT', 'Eliminates address typos', 'Web3 wallet deep linking']
        };
      case 'calendar':
        return {
          purpose: 'Automatically schedule meetings, webinars, or product launches in user calendars.',
          useCase: 'Concert posters, conference agendas, wedding invitations, appointment reminders.',
          benefits: ['Standard iCal format', 'Automatic timezone sync', 'Triggers native reminder notifications']
        };
      case 'appstore':
      case 'playstore':
        return {
          purpose: 'Drive direct mobile app downloads by linking straight to official store listings.',
          useCase: 'App promotional flyers, table tents, transit ads, and app onboarding cards.',
          benefits: ['Deep links to iOS App Store or Google Play', 'High install velocity', 'Clean attribution']
        };
      case 'maps':
      case 'coords':
        return {
          purpose: 'Guide visitors directly to your physical store, event venue, or hidden trailhead.',
          useCase: 'Real estate brochures, wedding directions, tourism guidebooks, delivery tags.',
          benefits: ['Opens native Apple or Google Maps', 'Precise GPS coordinate accuracy', 'Turn-by-turn navigation ready']
        };
      case 'email':
        return {
          purpose: 'Trigger a pre-addressed email draft with custom subject line and inquiry template.',
          useCase: 'Customer feedback posters, job application kiosks, support inquiry cards.',
          benefits: ['Auto-populates recipient email', 'Custom subject & body text', 'Reduces spam bot scraping']
        };
      case 'phone':
      case 'sms':
        return {
          purpose: 'Let leads call or text your sales team instantly with a single smartphone camera scan.',
          useCase: 'Real estate "For Sale" signs, emergency service placards, direct response mailers.',
          benefits: ['Instant dialer launching', 'Pre-written SMS body draft', 'Ideal for urgent conversions']
        };
      case 'pdf':
        return {
          purpose: 'Provide touchless access to multi-page restaurant menus, whitepapers, or manuals.',
          useCase: 'Dining tables, trade show booths, equipment specification plates.',
          benefits: ['Direct PDF file rendering', 'Resolution independent viewing', 'Easy content updates']
        };
      default:
        return {
          purpose: 'Encode specialized structured data formats for seamless offline-to-online automation.',
          useCase: 'Commercial operations, retail merchandising, smart home IoT, and marketing campaigns.',
          benefits: ['100% static local compute', 'Zero ongoing monthly fees', 'High speed scanning matrix']
        };
    }
  };

  return (
    /* 
      LAYOUT UPDATE (Requirement 4):
      - Removed `overflow-y-auto` to allow the page to expand and scroll at the document/viewport level.
      - Keeps `flex-1` and spacing parameters exactly the same to preserve the design.
    */
    <div className="flex-1 space-y-24 pb-32 pt-12 px-6 md:px-12 max-w-7xl mx-auto animate-fadeIn select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-purple-500/30 text-xs font-mono font-bold text-purple-300 uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          Supported Matrix Schemas
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Explore All <span className="accent-gradient-text">19 QR Formats</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed select-text">
          Every format is built with ISO-18004 precision, custom multi-stop glass styling, and carved error-correction buffers. Click any card to launch straight into the studio.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-white text-black shadow-xl shadow-white/10 scale-105' 
                  : 'glass text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTypes.map(type => {
          const details = getDetails(type.id);
          
          return (
            <Link
              key={type.id}
              to="/generator"
              onClick={() => onSelectType(type.id)}
              className="p-8 rounded-3xl glass-card border-white/10 hover:border-purple-500/50 hover:bg-gradient-to-b hover:from-purple-950/20 hover:to-transparent transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/15 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all shadow-lg">
                    {renderIcon(type.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white/5 text-zinc-400 uppercase tracking-wider border border-white/5">
                    {type.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                    {type.name}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-purple-400" />
                  </h3>
                  <p className="text-sm text-zinc-300 font-medium mt-2 select-text">
                    {type.description}
                  </p>
                </div>

                {/* Purpose & Use Case Breakdown */}
                <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-zinc-400 leading-relaxed select-text">
                  <div>
                    <strong className="text-zinc-200 uppercase tracking-wider font-mono text-[10px] block mb-1">Purpose</strong>
                    {details.purpose}
                  </div>
                  <div>
                    <strong className="text-zinc-200 uppercase tracking-wider font-mono text-[10px] block mb-1">Ideal Use Case</strong>
                    {details.useCase}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2 relative z-10">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">Core Benefits</span>
                <div className="space-y-1.5">
                  {details.benefits.map((b, bi) => (
                    <div key={bi} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-10 rounded-3xl glass glow-emerald border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-8 bg-gradient-to-r from-emerald-950/20 via-black to-black">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl font-black text-white">Need a custom enterprise QR data pipeline?</h3>
          <p className="text-sm text-zinc-400 select-text">We support bulk vector SVG generation, dynamic local privacy-focused telemetry, and custom API webhooks.</p>
        </div>
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-black text-sm shrink-0 transition-all shadow-xl shadow-emerald-500/20"
        >
          Contact Engineering
        </Link>
      </div>

    </div>
  );
};
