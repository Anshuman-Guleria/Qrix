import React, { useEffect, useRef, useState } from 'react';
import { QRCodeCustomization, QRTypeID } from '../types';
import { Download, Copy, Share2, Check, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QRPreviewProps {
  qrData: string;
  custom: QRCodeCustomization;
  activeType: QRTypeID;
  onDownloadToast: (format: string) => void;
}

export const QRPreview: React.FC<QRPreviewProps> = ({
  qrData,
  custom,
  activeType,
  onDownloadToast
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeInstance = useRef<any>(null);
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);

  // Initialize and update QRCodeStyling
  useEffect(() => {
    let mounted = true;
    
    async function updateQR() {
      if (!qrRef.current) return;
      setGenerating(true);

      try {
        // Dynamically import qr-code-styling for browser safety
        const QRCodeStylingModule = await import('qr-code-styling');
        const QRCodeStyling = QRCodeStylingModule.default;

        const options = {
          width: 320,
          height: 320,
          data: qrData || 'https://qrix.app',
          margin: custom.margin,
          qrOptions: {
            errorCorrectionLevel: custom.errorCorrectionLevel
          },
          image: custom.logoUrl || undefined,
          dotsOptions: {
            color: custom.useGradient ? custom.foregroundColor : custom.foregroundColor,
            type: custom.dotsStyle,
            gradient: custom.useGradient ? {
              type: custom.gradientType,
              rotation: (custom.gradientRotation * Math.PI) / 180,
              colorStops: [
                { offset: 0, color: custom.foregroundColor },
                { offset: 1, color: custom.gradientColor2 }
              ]
            } : undefined
          },
          backgroundOptions: {
            color: custom.isBgTransparent ? 'transparent' : custom.backgroundColor
          },
          imageOptions: {
            crossOrigin: 'anonymous',
            margin: custom.logoMargin || 8,
            imageSize: custom.logoSize,
            hideBackgroundDots: custom.hideBehindLogo
          },
          cornersSquareOptions: {
            type: custom.cornerSquareStyle,
            color: custom.useCustomEyeColors ? custom.eyeOuterColor : undefined
          },
          cornersDotOptions: {
            type: custom.cornerDotStyle,
            color: custom.useCustomEyeColors ? custom.eyeInnerColor : undefined
          }
        };

        if (!qrCodeInstance.current) {
          qrCodeInstance.current = new QRCodeStyling(options as any);
          qrRef.current.innerHTML = '';
          qrCodeInstance.current.append(qrRef.current);
        } else {
          qrCodeInstance.current.update(options as any);
        }
      } catch (err) {
        console.error("QR Code rendering error:", err);
      } finally {
        if (mounted) setGenerating(false);
      }
    }

    updateQR();

    return () => {
      mounted = false;
    };
  }, [qrData, custom]);

  // Download Handler
  const handleDownload = async (ext: 'png' | 'svg' | 'jpeg' | 'pdf') => {
    if (!qrCodeInstance.current) return;

    try {
      // Trigger confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#a855f7', '#10b981', '#f97316']
      });

      if (ext === 'pdf') {
        // Export via canvas blob to jsPDF or svg conversion
        const blob = await qrCodeInstance.current.getRawData('png');
        if (blob) {
          const { jsPDF } = await import('jspdf');
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [custom.size + 80, custom.size + 120]
          });
          const imgUrl = URL.createObjectURL(blob);
          pdf.setFillColor(custom.isBgTransparent ? '#ffffff' : custom.backgroundColor);
          pdf.rect(0, 0, custom.size + 80, custom.size + 120, 'F');
          pdf.addImage(imgUrl, 'PNG', 40, 40, custom.size, custom.size);
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(14);
          pdf.setTextColor('#18181b');
          pdf.text(`Qrix ${activeType.toUpperCase()} Code`, 40, custom.size + 70);
          pdf.save(`qrix_${activeType}_${Date.now()}.pdf`);
          URL.revokeObjectURL(imgUrl);
        }
      } else {
        await qrCodeInstance.current.download({
          name: `qrix_${activeType}_${Date.now()}`,
          extension: ext
        });
      }

      onDownloadToast(ext.toUpperCase());
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  // Copy to clipboard
  const handleCopy = async () => {
    if (!qrCodeInstance.current) return;
    try {
      const blob = await qrCodeInstance.current.getRawData('png');
      if (blob && navigator.clipboard && (window as any).ClipboardItem) {
        await navigator.clipboard.write([
          new (window as any).ClipboardItem({ 'image/png': blob })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        onDownloadToast('COPIED_IMAGE');
      } else {
        // Fallback copy text
        await navigator.clipboard.writeText(qrData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        onDownloadToast('COPIED_LINK');
      }
    } catch (e) {
      // Fallback
      try {
        await navigator.clipboard.writeText(qrData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        onDownloadToast('COPIED_LINK');
      } catch (err) {}
    }
  };

  // Share API
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Qrix QR Code',
          text: `Check out this ${activeType.toUpperCase()} QR code generated instantly on Qrix.`,
          url: window.location.href
        });
      } catch (e) {}
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 bg-gradient-to-b from-transparent to-purple-900/10 relative min-h-[500px] overflow-y-auto">
      {/* Sleek Theme Orbs */}
      <div className="orb w-[380px] h-[380px] bg-purple-600 top-10 left-10 animate-pulse" />
      <div className="orb w-[380px] h-[380px] bg-emerald-600 bottom-10 right-10" />

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* Glassmorphism Card matching Sleek HTML */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 p-6 sm:p-8 glass rounded-[40px] glow-purple flex flex-col items-center justify-center shadow-2xl transition-all border-white/15 group mb-8">
          
          {/* QR Canvas mounting point */}
          <div 
            ref={qrRef} 
            className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden [&_canvas]:max-w-full [&_canvas]:max-h-full [&_canvas]:rounded-2xl shadow-inner bg-transparent"
          />

          {generating && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-[40px] flex items-center justify-center gap-2 text-purple-300 text-xs font-semibold">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Rendering Vector Canvas...</span>
            </div>
          )}
        </div>

        {/* Live Status Pills matching Sleek HTML */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 border-white/20 shadow-lg">
            <span className="text-emerald-400 animate-pulse text-xs">●</span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-200">
              Live Preview Active
            </span>
          </div>
          <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 border-white/20 shadow-lg hidden sm:flex">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-medium tracking-wide uppercase text-zinc-400">
              High-Res Vector Engine
            </span>
          </div>
        </div>

        {/* Direct One-Click Downloads (No loading pages, No confirmations) */}
        <div className="w-full space-y-3 bg-black/50 p-6 rounded-3xl glass border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="text-xs font-bold tracking-wider uppercase text-zinc-400">
              Instant 1-Click Export
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              Zero Watermark
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleDownload('png')}
              className="py-3 px-4 rounded-2xl accent-gradient text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-purple-500/10 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PNG
            </button>

            <button
              onClick={() => handleDownload('svg')}
              className="py-3 px-4 rounded-2xl bg-white text-black font-extrabold text-xs sm:text-sm shadow-xl hover:bg-zinc-200 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Vector SVG
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-2">
            <button
              onClick={() => handleDownload('jpeg')}
              className="py-2 rounded-xl glass border-white/10 hover:border-white/30 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1"
            >
              JPEG
            </button>
            <button
              onClick={() => handleDownload('pdf')}
              className="py-2 rounded-xl glass border-white/10 hover:border-white/30 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1"
            >
              PDF Print
            </button>
            <button
              onClick={handleCopy}
              className="py-2 rounded-xl glass border-white/10 hover:border-purple-500/40 text-xs font-semibold text-purple-300 hover:text-white transition-all flex items-center justify-center gap-1.5 col-span-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleShare}
              className="py-2 rounded-xl glass border-white/10 hover:border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:text-white transition-all flex items-center justify-center gap-1 col-span-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
