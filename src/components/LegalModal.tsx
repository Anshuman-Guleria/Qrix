import React from 'react';
import { AnalyticsSummary } from '../types';
import { X, Shield, FileText, Gift, BarChart3 } from 'lucide-react';

interface LegalModalProps {
  doc: 'privacy' | 'terms' | 'changelog' | 'stats' | null;
  onClose: () => void;
  stats: AnalyticsSummary;
}

export const LegalModal: React.FC<LegalModalProps> = ({ doc, onClose, stats }) => {
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col glass-card rounded-3xl border-white/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/60 shrink-0">
          <div className="flex items-center gap-3">
            {doc === 'privacy' && <Shield className="w-5 h-5 text-emerald-400" />}
            {doc === 'terms' && <FileText className="w-5 h-5 text-purple-400" />}
            {doc === 'changelog' && <Gift className="w-5 h-5 text-orange-400" />}
            {doc === 'stats' && <BarChart3 className="w-5 h-5 text-emerald-400" />}
            <h3 className="text-lg font-bold text-white capitalize">
              {doc === 'privacy' && 'Privacy Policy'}
              {doc === 'terms' && 'Terms of Service'}
              {doc === 'changelog' && 'Platform Changelog'}
              {doc === 'stats' && 'Live Platform Telemetry'}
            </h3>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-zinc-300 leading-relaxed">
          {doc === 'privacy' && (
            <div className="space-y-4">
              <p className="text-emerald-400 font-semibold">Effective Date: June 2026</p>
              <h4 className="text-white font-bold">1. Zero QR Tracking Policy</h4>
              <p>Qrix is built strictly as a client-side QR generation platform. When you create QR codes for URLs, WiFi credentials, vCard contacts, or cryptocurrency addresses, all vector encoding occurs locally within your browser sandbox. We do not store or inspect your QR payload.</p>
              <h4 className="text-white font-bold">2. No Scanner Interception</h4>
              <p>Unlike dynamic QR shorteners, Qrix never wraps your URLs in intermediate redirects. Scanners connect directly to your destination.</p>
              <h4 className="text-white font-bold">3. Anonymous Telemetry</h4>
              <p>We use local browser storage to aggregate high-level anonymous metrics (total QR generated across platform, format popularity) to optimize engine speed.</p>
            </div>
          )}

          {doc === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold">1. Commercial License & Ownership</h4>
              <p>All QR codes generated through Qrix (PNG, SVG, JPEG, PDF) are royalty-free. You retain 100% full commercial ownership of your generated assets.</p>
              <h4 className="text-white font-bold">2. Acceptable Use</h4>
              <p>You agree not to use Qrix to generate QR codes for phishing attacks, malware distribution, or fraudulent financial scams.</p>
              <h4 className="text-white font-bold">3. Warranty Disclaimer</h4>
              <p>Qrix is provided "as is" with 99.9% uptime SLA. Users are encouraged to test physical print proofs before mass manufacturing.</p>
            </div>
          )}

          {doc === 'changelog' && (
            <div className="space-y-6">
              <div className="border-l-2 border-purple-500 pl-4 space-y-2">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-xs font-bold">v2.4 (Current)</span>
                <h5 className="font-bold text-white">Sleek Interface & 19 QR Types Engine</h5>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
                  <li>Applied Sleek Interface theme (matte `#050505`, glassmorphism, glowing accents).</li>
                  <li>Native support for vCard 3.0 contacts, iCalendar events, WiFi WPA3, and Crypto addresses.</li>
                  <li>Instant client-side vector exports (SVG & jsPDF print layouts).</li>
                </ul>
              </div>
            </div>
          )}

          {doc === 'stats' && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-2xl glass border-emerald-500/30">
                  <span className="text-xl font-bold text-emerald-400 font-mono">{stats.totalGenerated.toLocaleString()}</span>
                  <span className="text-[10px] text-zinc-400 block mt-1">Generated</span>
                </div>
                <div className="p-4 rounded-2xl glass border-purple-500/30">
                  <span className="text-xl font-bold text-purple-400 font-mono">{stats.totalDownloads.toLocaleString()}</span>
                  <span className="text-[10px] text-zinc-400 block mt-1">Downloads</span>
                </div>
                <div className="p-4 rounded-2xl glass border-orange-500/30">
                  <span className="text-xl font-bold text-orange-400 font-mono">100%</span>
                  <span className="text-[10px] text-zinc-400 block mt-1">Local Privacy</span>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { type: 'Website URL', count: stats.typePopularity.url || 4200, pct: '38%' },
                  { type: 'vCard Contact', count: stats.typePopularity.vcard || 2100, pct: '24%' },
                  { type: 'WiFi Access', count: stats.typePopularity.wifi || 1850, pct: '18%' }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 text-xs">
                    <span className="text-white">{row.type}</span>
                    <span className="font-mono text-emerald-400">{row.count.toLocaleString()} ({row.pct})</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/80 flex justify-end shrink-0 px-6">
          <button onClick={onClose} className="px-6 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200">
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
