export type QRTypeID =
  | 'url'
  | 'text'
  | 'email'
  | 'phone'
  | 'sms'
  | 'whatsapp'
  | 'wifi'
  | 'vcard'
  | 'maps'
  | 'coords'
  | 'pdf'
  | 'image'
  | 'video'
  | 'appstore'
  | 'playstore'
  | 'event'
  | 'calendar'
  | 'crypto'
  | 'social';

export interface QRTypeMetadata {
  id: QRTypeID;
  name: string;
  category: 'Core' | 'Communication' | 'Links' | 'Location' | 'Media & Apps';
  description: string;
  iconName: string;
}

export interface QRDataContent {
  // Common
  url?: string;
  text?: string;
  
  // Email / SMS / Phone / WhatsApp
  email?: string;
  subject?: string;
  body?: string;
  phone?: string;
  message?: string;
  
  // WiFi
  ssid?: string;
  password?: string;
  encryption?: 'WPA' | 'WEP' | 'nopass';
  hidden?: boolean;
  
  // vCard
  firstName?: string;
  lastName?: string;
  organization?: string;
  title?: string;
  workPhone?: string;
  mobilePhone?: string;
  website?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  
  // Location
  mapsQuery?: string;
  latitude?: string;
  longitude?: string;
  
  // Media / Store
  pdfUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  
  // Event & Calendar
  eventTitle?: string;
  eventLocation?: string;
  eventDescription?: string;
  startDate?: string; // YYYY-MM-DDTHH:mm
  endDate?: string;
  
  // Crypto
  cryptoCurrency?: 'bitcoin' | 'ethereum' | 'solana' | 'usdt' | 'dogecoin';
  cryptoAddress?: string;
  cryptoAmount?: string;
  cryptoNote?: string;
  
  // Social
  socialPlatform?: 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'youtube' | 'facebook' | 'github' | 'telegram' | 'discord' | 'threads';
  socialHandle?: string;
}

export type DotType = 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';
export type CornerSquareType = 'dot' | 'square' | 'extra-rounded';
export type CornerDotType = 'dot' | 'square';
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface QRCodeCustomization {
  size: number;
  margin: number;
  errorCorrectionLevel: ErrorCorrectionLevel;
  
  // Colors
  useGradient: boolean;
  foregroundColor: string;
  gradientColor2: string;
  gradientType: 'linear' | 'radial';
  gradientRotation: number;
  backgroundColor: string;
  isBgTransparent: boolean;
  
  // Modules & Shapes
  dotsStyle: DotType;
  cornerSquareStyle: CornerSquareType;
  cornerDotStyle: CornerDotType;
  
  // Custom eye colors
  useCustomEyeColors: boolean;
  eyeOuterColor: string;
  eyeInnerColor: string;
  
  // Logo
  logoUrl?: string;
  logoSize: number; // 0.1 to 0.5
  logoMargin: number;
  hideBehindLogo: boolean;
}

export interface QRHistoryItem {
  id: string;
  createdAt: number;
  type: QRTypeID;
  title: string;
  summary: string;
  rawContent: string;
  customization: QRCodeCustomization;
}

export interface FeedbackItem {
  id: string;
  type: 'bug' | 'feature' | 'suggestion';
  title: string;
  description: string;
  email?: string;
  rating?: number;
  createdAt: number;
  status: 'new' | 'reviewed';
}

export interface AnalyticsSummary {
  totalGenerated: number;
  totalDownloads: number;
  typePopularity: Record<string, number>;
  downloadsByType: Record<string, number>;
  devices: { desktop: number; mobile: number; tablet: number };
  browsers: Record<string, number>;
  returningVisitors: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
