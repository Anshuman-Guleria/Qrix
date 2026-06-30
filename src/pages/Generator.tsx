import React from 'react';
import { Workspace } from '../components/Workspace';
import { QRTypeID, QRDataContent, QRCodeCustomization } from '../types';

interface GeneratorProps {
  activeType: QRTypeID;
  setActiveType: (id: QRTypeID) => void;
  qrDataContent: QRDataContent;
  setQRDataContent: React.Dispatch<React.SetStateAction<QRDataContent>>;
  customization: QRCodeCustomization;
  setCustomization: React.Dispatch<React.SetStateAction<QRCodeCustomization>>;
  onDownloadToast: (format: string) => void;
  onQRGenerated: (type: QRTypeID) => void;
}

export const Generator: React.FC<GeneratorProps> = (props) => {
  return (
    /* 
      LAYOUT UPDATE (Requirements 4, 5 & 6):
      - Removed strict `h-full` and `overflow-hidden` constraints to prevent viewport clipping.
      - Used a flexible `min-h-[calc(100vh-180px)]` structure so that it takes up the full remaining viewport space on desktop,
        allowing the workspace to fit perfectly while permitting the footer to sit below it naturally if scrolled.
    */
    <div className="flex-1 flex flex-col min-h-[calc(100vh-180px)] relative animate-fadeIn bg-[#050505]">
      <Workspace {...props} />
    </div>
  );
};
