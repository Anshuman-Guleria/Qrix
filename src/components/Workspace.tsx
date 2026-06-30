import React, { useState } from 'react';
import { QRTypeID, QRDataContent, QRCodeCustomization } from '../types';
import { QR_TYPES, CATEGORIES } from '../data/qrTypes';
import { QRTypeInput } from './QRTypeInput';
import { CustomizationPanel } from './CustomizationPanel';
import { QRPreview } from './QRPreview';
import { formatQRData } from '../lib/qrFormatter';
import { 
  Link as LinkIcon, FileText, Mail, Phone, MessageSquare, 
  MessageCircle, UserPlus, Wifi, MapPin, Compass, Image, 
  Video, Apple, Smartphone, Calendar, CalendarPlus, Coins, 
  Share2, Sparkles, Sliders, Layers
} from 'lucide-react';

interface WorkspaceProps {
  activeType: QRTypeID;
  setActiveType: (id: QRTypeID) => void;
  qrDataContent: QRDataContent;
  setQRDataContent: React.Dispatch<React.SetStateAction<QRDataContent>>;
  customization: QRCodeCustomization;
  setCustomization: React.Dispatch<React.SetStateAction<QRCodeCustomization>>;
  onDownloadToast: (format: string) => void;
  onQRGenerated: (type: QRTypeID) => void;
}

const ICON_MAP: Record<string, any> = {
  Link: LinkIcon,
  FileText,
  Mail,
  Phone,
  MessageSquare,
  MessageCircle,
  UserPlus,
  Wifi,
  MapPin,
  Compass,
  Image,
  Video,
  Apple,
  Smartphone,
  Calendar,
  CalendarPlus,
  Coins,
  Share2
};

export const Workspace: React.FC<WorkspaceProps> = ({
  activeType,
  setActiveType,
  qrDataContent,
  setQRDataContent,
  customization,
  setCustomization,
  onDownloadToast,
  onQRGenerated
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mobileTab, setMobileTab] = useState<'types' | 'edit' | 'preview'>('edit');

  const formattedQRString = formatQRData(activeType, qrDataContent);

  const handleDataChange = (newData: Partial<QRDataContent>) => {
    setQRDataContent(prev => ({ ...prev, ...newData }));
    onQRGenerated(activeType);
  };

  const handleCustomChange = (newCustom: Partial<QRCodeCustomization>) => {
    setCustomization(prev => ({ ...prev, ...newCustom }));
  };

  const filteredTypes = activeCategory === 'All'
    ? QR_TYPES
    : QR_TYPES.filter(t => t.category === activeCategory);

  return (
    <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
      {/* Mobile Workspace Navigation Tabs */}
      <div className="md:hidden flex border-b border-white/10 bg-black/80 px-4 py-2 gap-2 shrink-0 z-30">
        <button
          onClick={() => setMobileTab('types')}
          className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
            mobileTab === 'types' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' : 'text-zinc-400 glass'
          }`}
        >
          1. Type ({QR_TYPES.find(t=>t.id===activeType)?.name})
        </button>
        <button
          onClick={() => setMobileTab('edit')}
          className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
            mobileTab === 'edit' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'text-zinc-400 glass'
          }`}
        >
          2. Customize
        </button>
        <button
          onClick={() => setMobileTab('preview')}
          className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
            mobileTab === 'preview' ? 'accent-gradient text-black font-extrabold shadow-lg' : 'text-zinc-400 glass'
          }`}
        >
          3. Preview & Download
        </button>
      </div>

      {/* COLUMN 1: Left Sidebar - QR Types (Sleek Theme HTML w-20 or w-64 expanded) */}
      <aside className={`w-full md:w-72 border-r border-white/5 flex flex-col bg-black/40 md:bg-black/20 overflow-y-auto shrink-0 ${
        mobileTab === 'types' ? 'flex flex-1' : 'hidden md:flex'
      }`}>
        <div className="p-4 border-b border-white/5 sticky top-0 bg-black/90 backdrop-blur-md z-10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Select QR Type
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
              19 Types
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1 overflow-x-auto scrollbar-none pb-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide uppercase shrink-0 transition-all ${
                  activeCategory === cat ? 'bg-white text-black shadow' : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Types List */}
        <div className="p-3 space-y-1.5 flex-1">
          {filteredTypes.map(t => {
            const IconComponent = ICON_MAP[t.iconName] || LinkIcon;
            const isSelected = activeType === t.id;

            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveType(t.id);
                  setMobileTab('edit');
                  onQRGenerated(t.id);
                }}
                className={`w-full p-3 rounded-2xl flex items-center gap-3.5 text-left transition-all group ${
                  isSelected 
                    ? 'glass border-emerald-500/50 bg-emerald-500/10 shadow-xl shadow-emerald-500/5' 
                    : 'hover:bg-white/5 text-zinc-400 hover:text-zinc-200 border border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  isSelected 
                    ? 'accent-gradient text-black font-bold shadow-lg shadow-purple-500/20' 
                    : 'glass text-zinc-400 group-hover:text-white'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                      {t.name}
                    </span>
                    {isSelected && <span className="text-[10px] text-emerald-400 font-mono">ACTIVE</span>}
                  </div>
                  <p className="text-[10px] text-zinc-500 truncate mt-0.5">
                    {t.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* COLUMN 2: Center Content - Data & Customization (Sleek w-80 or md:w-96) */}
      <div className={`w-full md:w-[420px] lg:w-[460px] border-r border-white/5 p-6 space-y-8 overflow-y-auto bg-black/30 shrink-0 ${
        mobileTab === 'edit' ? 'flex flex-col flex-1' : 'hidden md:flex flex-col'
      }`}>
        {/* Section A: Content Input */}
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              1. {QR_TYPES.find(t=>t.id===activeType)?.name} Content
            </h2>
            <button
              onClick={() => setMobileTab('types')}
              className="md:hidden text-xs text-purple-400 underline"
            >
              Change
            </button>
          </div>

          <QRTypeInput
            activeType={activeType}
            data={qrDataContent}
            onChange={handleDataChange}
          />
        </div>

        {/* Section B: Appearance & Customization */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-400" />
              2. Design & Branding
            </h2>
          </div>

          <CustomizationPanel
            custom={customization}
            onChange={handleCustomChange}
          />
        </div>

        {/* Mobile preview trigger */}
        <div className="md:hidden pt-6 sticky bottom-0 bg-black/90 pb-4">
          <button
            onClick={() => setMobileTab('preview')}
            className="w-full py-3.5 rounded-2xl accent-gradient text-black font-extrabold text-sm shadow-2xl"
          >
            View Live Preview & Download →
          </button>
        </div>
      </div>

      {/* COLUMN 3: Right Preview Section */}
      <div className={`flex-1 flex overflow-hidden bg-gradient-to-b from-transparent to-purple-900/10 ${
        mobileTab === 'preview' ? 'flex flex-col' : 'hidden md:flex flex-col'
      }`}>
        <QRPreview
          qrData={formattedQRString}
          custom={customization}
          activeType={activeType}
          onDownloadToast={onDownloadToast}
        />
      </div>
    </main>
  );
};
