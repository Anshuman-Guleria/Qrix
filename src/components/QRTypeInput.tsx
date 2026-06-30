import React from 'react';
import { QRTypeID, QRDataContent } from '../types';
import { 
  Globe, FileText, Mail, Phone, MessageSquare, MessageCircle, 
  UserPlus, Wifi, MapPin, Compass, Image, Video, Calendar, 
  CalendarPlus, Coins, Share2, Shield, Lock, Sparkles, HelpCircle
} from 'lucide-react';

interface QRTypeInputProps {
  activeType: QRTypeID;
  data: QRDataContent;
  onChange: (newData: Partial<QRDataContent>) => void;
}

export const QRTypeInput: React.FC<QRTypeInputProps> = ({ activeType, data, onChange }) => {
  const handleChange = (field: keyof QRDataContent, value: any) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* URL */}
      {activeType === 'url' && (
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 flex items-center justify-between">
            <span>Destination Website URL</span>
            <span className="text-[10px] text-emerald-400">Secure & Instant</span>
          </label>
          <div className="relative flex items-center">
            <Globe className="w-4 h-4 text-zinc-500 absolute left-3 pointer-events-none" />
            <input
              type="url"
              placeholder="https://example.com/my-link"
              value={data.url || ''}
              onChange={(e) => handleChange('url', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-emerald-400 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-white/[0.07] transition-all font-mono"
            />
          </div>
          <p className="text-[11px] text-zinc-500">
            Scanners will be redirected instantly with zero delay or intermediate tracking.
          </p>
        </div>
      )}

      {/* Text */}
      {activeType === 'text' && (
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400">Plain Text / Notes / Codes</label>
          <textarea
            rows={4}
            placeholder="Enter plain text, serial numbers, discount codes or secret messages..."
            value={data.text || ''}
            onChange={(e) => handleChange('text', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.07] transition-all resize-none"
          />
        </div>
      )}

      {/* Email */}
      {activeType === 'email' && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Recipient Email Address</label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3" />
              <input
                type="email"
                placeholder="support@company.com"
                value={data.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Subject Line (Optional)</label>
            <input
              type="text"
              placeholder="Inquiry from QR scan"
              value={data.subject || ''}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Message Body</label>
            <textarea
              rows={3}
              placeholder="Hi there, I scanned your QR code and wanted to ask..."
              value={data.body || ''}
              onChange={(e) => handleChange('body', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50 resize-none"
            />
          </div>
        </div>
      )}

      {/* Phone */}
      {activeType === 'phone' && (
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400">Phone Number to Dial</label>
          <div className="relative flex items-center">
            <Phone className="w-4 h-4 text-zinc-500 absolute left-3" />
            <input
              type="tel"
              placeholder="+1 (555) 019-2834"
              value={data.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-emerald-400 font-mono focus:outline-none focus:border-emerald-500/50"
            />
          </div>
        </div>
      )}

      {/* SMS */}
      {activeType === 'sms' && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Recipient Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 019-2834"
              value={data.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-zinc-200 font-mono focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Pre-filled SMS Text</label>
            <textarea
              rows={3}
              placeholder="JOIN 20% DISCOUNT"
              value={data.message || ''}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50 resize-none"
            />
          </div>
        </div>
      )}

      {/* WhatsApp */}
      {activeType === 'whatsapp' && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">WhatsApp Phone Number (with Country Code)</label>
            <div className="relative flex items-center">
              <MessageCircle className="w-4 h-4 text-emerald-400 absolute left-3" />
              <input
                type="tel"
                placeholder="15551234567"
                value={data.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-emerald-400 font-mono focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Initial WhatsApp Message</label>
            <textarea
              rows={3}
              placeholder="Hello! I would like to book an appointment."
              value={data.message || ''}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 resize-none"
            />
          </div>
        </div>
      )}

      {/* WiFi */}
      {activeType === 'wifi' && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Network Name (SSID)</label>
            <div className="relative flex items-center">
              <Wifi className="w-4 h-4 text-purple-400 absolute left-3" />
              <input
                type="text"
                placeholder="Office_Guest_5G"
                value={data.ssid || ''}
                onChange={(e) => handleChange('ssid', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50 font-medium"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">WiFi Password</label>
            <input
              type="text"
              placeholder="SecretPassword123"
              value={data.password || ''}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-zinc-200 font-mono focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">Encryption</label>
              <select
                value={data.encryption || 'WPA'}
                onChange={(e) => handleChange('encryption', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300 focus:outline-none"
              >
                <option value="WPA" className="bg-zinc-900">WPA/WPA2/WPA3</option>
                <option value="WEP" className="bg-zinc-900">WEP</option>
                <option value="nopass" className="bg-zinc-900">No Password (Open)</option>
              </select>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <input
                type="checkbox"
                id="hiddenWifi"
                checked={!!data.hidden}
                onChange={(e) => handleChange('hidden', e.target.checked)}
                className="rounded bg-white/10 border-white/20 text-purple-500 focus:ring-0 w-4 h-4"
              />
              <label htmlFor="hiddenWifi" className="text-xs text-zinc-400 select-none cursor-pointer">
                Hidden SSID
              </label>
            </div>
          </div>
        </div>
      )}

      {/* vCard */}
      {activeType === 'vcard' && (
        <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">First Name</label>
              <input
                type="text"
                placeholder="Alex"
                value={data.firstName || ''}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">Last Name</label>
              <input
                type="text"
                placeholder="Mercer"
                value={data.lastName || ''}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">Company</label>
              <input
                type="text"
                placeholder="Qrix Labs"
                value={data.organization || ''}
                onChange={(e) => handleChange('organization', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">Job Title</label>
              <input
                type="text"
                placeholder="Principal Architect"
                value={data.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-zinc-400">Mobile Phone</label>
            <input
              type="tel"
              placeholder="+1 (555) 234-5678"
              value={data.mobilePhone || ''}
              onChange={(e) => handleChange('mobilePhone', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-emerald-400 font-mono focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-zinc-400">Email Address</label>
            <input
              type="email"
              placeholder="alex@qrix.app"
              value={data.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-zinc-400">Website</label>
            <input
              type="url"
              placeholder="https://qrix.app"
              value={data.website || ''}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-zinc-400">Address (Street, City, Country)</label>
            <input
              type="text"
              placeholder="100 Innovation Way, San Francisco, CA"
              value={data.street || ''}
              onChange={(e) => handleChange('street', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Google Maps / Coords */}
      {activeType === 'maps' && (
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400">Place Name or Search Address</label>
          <input
            type="text"
            placeholder="Eiffel Tower, Paris or 1 Market St"
            value={data.mapsQuery || ''}
            onChange={(e) => handleChange('mapsQuery', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50"
          />
        </div>
      )}

      {activeType === 'coords' && (
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Latitude</label>
            <input
              type="text"
              placeholder="37.7749"
              value={data.latitude || ''}
              onChange={(e) => handleChange('latitude', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-emerald-400 font-mono focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Longitude</label>
            <input
              type="text"
              placeholder="-122.4194"
              value={data.longitude || ''}
              onChange={(e) => handleChange('longitude', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-emerald-400 font-mono focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Media & Apps */}
      {['pdf', 'image', 'video', 'appstore', 'playstore'].includes(activeType) && (
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400">
            {activeType === 'pdf' && 'PDF Document Hosted URL'}
            {activeType === 'image' && 'Image or Gallery Hosted URL'}
            {activeType === 'video' && 'YouTube / Vimeo / MP4 Video URL'}
            {activeType === 'appstore' && 'Apple App Store App Link'}
            {activeType === 'playstore' && 'Google Play Store App Link'}
          </label>
          <input
            type="url"
            placeholder={
              activeType === 'pdf' ? 'https://company.com/menu.pdf' :
              activeType === 'video' ? 'https://youtube.com/watch?v=...' :
              'https://apps.apple.com/app/id...'
            }
            value={
              activeType === 'pdf' ? (data.pdfUrl || '') :
              activeType === 'image' ? (data.imageUrl || '') :
              activeType === 'video' ? (data.videoUrl || '') :
              activeType === 'appstore' ? (data.appStoreUrl || '') :
              (data.playStoreUrl || '')
            }
            onChange={(e) => {
              const val = e.target.value;
              if (activeType === 'pdf') handleChange('pdfUrl', val);
              if (activeType === 'image') handleChange('imageUrl', val);
              if (activeType === 'video') handleChange('videoUrl', val);
              if (activeType === 'appstore') handleChange('appStoreUrl', val);
              if (activeType === 'playstore') handleChange('playStoreUrl', val);
            }}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-emerald-400 font-mono focus:outline-none focus:border-purple-500/50"
          />
        </div>
      )}

      {/* Event & Calendar */}
      {['event', 'calendar'].includes(activeType) && (
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-400">Event Title</label>
            <input
              type="text"
              placeholder="Annual Tech Keynote 2026"
              value={data.eventTitle || ''}
              onChange={(e) => handleChange('eventTitle', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">Start Time</label>
              <input
                type="datetime-local"
                value={data.startDate || ''}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-zinc-300 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-zinc-400">End Time</label>
              <input
                type="datetime-local"
                value={data.endDate || ''}
                onChange={(e) => handleChange('endDate', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-zinc-300 focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[11px] text-zinc-400">Location</label>
            <input
              type="text"
              placeholder="Moscone Center, SF & Virtual"
              value={data.eventLocation || ''}
              onChange={(e) => handleChange('eventLocation', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] text-zinc-400">Description</label>
            <textarea
              rows={2}
              placeholder="Join us for product launches and networking..."
              value={data.eventDescription || ''}
              onChange={(e) => handleChange('eventDescription', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none resize-none"
            />
          </div>
        </div>
      )}

      {/* Cryptocurrency */}
      {activeType === 'crypto' && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {(['bitcoin', 'ethereum', 'solana'] as const).map((coin) => (
              <button
                key={coin}
                type="button"
                onClick={() => handleChange('cryptoCurrency', coin)}
                className={`py-2 px-2 rounded-xl text-xs font-semibold capitalize border transition-all ${
                  (data.cryptoCurrency || 'bitcoin') === coin
                    ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10'
                }`}
              >
                {coin}
              </button>
            ))}
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Wallet Receive Address</label>
            <input
              type="text"
              placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
              value={data.cryptoAddress || ''}
              onChange={(e) => handleChange('cryptoAddress', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-orange-400 font-mono focus:outline-none focus:border-orange-500/50"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Amount (Optional)</label>
            <input
              type="text"
              placeholder="0.05"
              value={data.cryptoAmount || ''}
              onChange={(e) => handleChange('cryptoAmount', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-zinc-200 font-mono focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Social */}
      {activeType === 'social' && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {(['instagram', 'twitter', 'linkedin', 'tiktok', 'youtube', 'github'] as const).map((plat) => (
              <button
                key={plat}
                type="button"
                onClick={() => handleChange('socialPlatform', plat)}
                className={`py-2 rounded-xl text-xs font-medium capitalize border transition-all ${
                  (data.socialPlatform || 'instagram') === plat
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10'
                }`}
              >
                {plat === 'twitter' ? 'X (Twitter)' : plat}
              </button>
            ))}
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Username / Profile Handle</label>
            <div className="relative flex items-center">
              <span className="text-zinc-500 absolute left-3 font-mono text-sm">@</span>
              <input
                type="text"
                placeholder="qrix_official"
                value={data.socialHandle || ''}
                onChange={(e) => handleChange('socialHandle', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-2 text-sm text-zinc-200 font-mono focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
