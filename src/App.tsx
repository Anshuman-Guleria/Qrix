/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QRTypeID, QRDataContent, QRCodeCustomization, FAQItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { logQRGenerated, logQRDownloaded, getLocalAnalytics } from './lib/analytics';

// Pages
import { Home } from './pages/Home';
import { Generator } from './pages/Generator';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Roadmap } from './pages/Roadmap';
import { Contact } from './pages/Contact';

const DEFAULT_CUSTOMIZATION: QRCodeCustomization = {
  size: 1024,
  margin: 16,
  errorCorrectionLevel: 'H',
  useGradient: true,
  foregroundColor: '#a855f7',
  gradientColor2: '#10b981',
  gradientType: 'linear',
  gradientRotation: 135,
  backgroundColor: '#050505',
  isBgTransparent: true,
  dotsStyle: 'rounded',
  cornerSquareStyle: 'square',
  cornerDotStyle: 'square',
  useCustomEyeColors: false,
  eyeOuterColor: '#a855f7',
  eyeInnerColor: '#10b981',
  logoSize: 0.25,
  logoMargin: 10,
  hideBehindLogo: true
};

const INITIAL_FAQS: FAQItem[] = [
  {
    question: 'Do I need to create an account or login to generate QR codes?',
    answer: 'No! Qrix is engineered as an open, frictionless platform. You can generate unlimited QR codes, customize them with logos and gradients, and download them immediately in vector or PNG formats without signing up or logging in.'
  },
  {
    question: 'Will my generated QR codes expire after a certain number of scans?',
    answer: 'Never. All static QR codes created on Qrix encode your destination content directly into the physical matrix pattern. They remain 100% functional forever with unlimited scans and zero ongoing subscription fees.'
  },
  {
    question: 'Are there any watermarks or advertising redirects on downloaded QR codes?',
    answer: 'Zero watermarks and zero tracking redirects. When your customers scan your QR code, they connect straight to your website URL, WiFi network, or vCard contact instantly without passing through tracking servers.'
  },
  {
    question: 'What resolution are the downloaded files? Can I print them on billboards?',
    answer: 'Yes! When you export as SVG or PDF, you receive pure resolution-independent vector artwork. You can scale these files to billboard dimensions or product packaging without losing any sharpness. PNG exports can also be scaled up to 2000px.'
  },
  {
    question: 'Can I embed my company logo inside the QR code safely?',
    answer: 'Yes. Our generator allows you to upload any PNG or SVG logo. We automatically apply high ISO error correction (Level H) and carve out a clean buffer zone behind your logo so scanning reliability remains 100% intact.'
  }
];

export default function App() {
  const [activeType, setActiveType] = useState<QRTypeID>('url');
  const [qrDataContent, setQRDataContent] = useState<QRDataContent>({
    url: 'https://qrix.app/sleek-launch'
  });
  const [customization, setCustomization] = useState<QRCodeCustomization>(DEFAULT_CUSTOMIZATION);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | 'changelog' | 'stats' | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [stats, setStats] = useState(getLocalAnalytics());

  // Sync light mode class on body
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const addToast = useCallback((type: 'success' | 'error' | 'info', message: string) => {
    const id = 't_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleReset = useCallback(() => {
    setCustomization(DEFAULT_CUSTOMIZATION);
    addToast('info', 'Design reset to Sleek Interface default theme');
  }, [addToast]);

  const handleQRGenerated = useCallback((type: QRTypeID) => {
    logQRGenerated(type);
    setStats(getLocalAnalytics());
  }, []);

  const handleDownloadToast = useCallback((format: string) => {
    logQRDownloaded(activeType, format);
    setStats(getLocalAnalytics());
    if (format.startsWith('COPIED')) {
      addToast('success', `QR code ${format === 'COPIED_IMAGE' ? 'image' : 'link'} copied to clipboard!`);
    } else {
      addToast('success', `Downloaded high-resolution ${format} QR code successfully!`);
    }
  }, [activeType, addToast]);

  const handleSelectType = useCallback((id: QRTypeID) => {
    setActiveType(id);
  }, []);

  return (
    <HashRouter>
      {/* 
        LAYOUT UPDATE (Requirements 1, 3 & 4):
        - Replaced `h-screen` with `min-h-screen` to allow the root container to stretch naturally.
        - Replaced `w-screen` with `w-full` for cleaner responsive bounds.
        - Removed `overflow-hidden` so that the primary viewport page scrolls vertically.
      */}
      <div className="relative flex flex-col min-h-screen w-full bg-[#050505] text-[#e4e4e7] select-text font-sans">
        
        {/* Background Sleek Ambient Glow Orbs */}
        <div className="orb w-[450px] h-[450px] bg-purple-600 top-[-120px] left-[-120px] pointer-events-none" />
        <div className="orb w-[450px] h-[450px] bg-emerald-600 bottom-[-120px] right-[-120px] pointer-events-none" />

        {/* 
          LAYOUT UPDATE (Requirements 3 & 4):
          - Changed `h-full` to `flex-1` and `min-h-screen` to ensure proper flex column scaling.
          - Removed `overflow-hidden` to allow contents within this layer to scroll naturally.
        */}
        <div className="relative z-10 flex flex-col min-h-screen flex-1 w-full">
          {/* Top Navigation Bar */}
          <Header
            isLightMode={isLightMode}
            toggleLightMode={() => setIsLightMode(!isLightMode)}
            onReset={handleReset}
            openLegalModal={(doc) => setLegalDoc(doc)}
            totalGenerated={stats.totalGenerated}
          />

          {/* Router Page Views */}
          {/* 
            LAYOUT UPDATE (Requirements 3 & 4):
            - Removed `h-full` and `overflow-hidden` from the main routing container.
            - This allows pages to expand fully and naturally push the footer downward.
          */}
          <main className="flex-1 flex flex-col relative">
            <Routes>
              <Route path="/" element={
                <Home faqList={INITIAL_FAQS} onSelectType={handleSelectType} />
              } />
              <Route path="/features" element={
                <Features onSelectType={handleSelectType} />
              } />
              <Route path="/generator" element={
                <Generator
                  activeType={activeType}
                  setActiveType={setActiveType}
                  qrDataContent={qrDataContent}
                  setQRDataContent={setQRDataContent}
                  customization={customization}
                  setCustomization={setCustomization}
                  onDownloadToast={handleDownloadToast}
                  onQRGenerated={handleQRGenerated}
                />
              } />
              <Route path="/about" element={<About />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/contact" element={
                <Contact onSuccessToast={() => addToast('success', 'Message dispatched successfully!')} />
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Bottom Micro Footer */}
          <Footer
            openLegalModal={(doc) => setLegalDoc(doc)}
          />
        </div>

        {/* Modals & Toasts */}
        <LegalModal
          doc={legalDoc}
          onClose={() => setLegalDoc(null)}
          stats={stats}
        />

        <ToastContainer
          toasts={toasts}
          onDismiss={dismissToast}
        />
      </div>
    </HashRouter>
  );
}
