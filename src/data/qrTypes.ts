import { QRTypeMetadata } from '../types';

export const QR_TYPES: QRTypeMetadata[] = [
  // Core & Links
  {
    id: 'url',
    name: 'Website URL',
    category: 'Core',
    description: 'Link to any website, landing page, or portfolio',
    iconName: 'Link'
  },
  {
    id: 'text',
    name: 'Plain Text',
    category: 'Core',
    description: 'Display plain text, notes, or serial numbers',
    iconName: 'FileText'
  },

  // Communication
  {
    id: 'email',
    name: 'Email',
    category: 'Communication',
    description: 'Pre-fill recipient email, subject, and body',
    iconName: 'Mail'
  },
  {
    id: 'phone',
    name: 'Phone Call',
    category: 'Communication',
    description: 'Instantly dial a phone number when scanned',
    iconName: 'Phone'
  },
  {
    id: 'sms',
    name: 'SMS Message',
    category: 'Communication',
    description: 'Pre-compose a text message to a specific number',
    iconName: 'MessageSquare'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'Communication',
    description: 'Start a direct WhatsApp chat with pre-filled message',
    iconName: 'MessageCircle'
  },

  // Contact & Network
  {
    id: 'vcard',
    name: 'Contact (vCard)',
    category: 'Core',
    description: 'Share digital business card with full contact details',
    iconName: 'UserPlus'
  },
  {
    id: 'wifi',
    name: 'WiFi Network',
    category: 'Core',
    description: 'Connect to wireless network without typing password',
    iconName: 'Wifi'
  },

  // Location
  {
    id: 'maps',
    name: 'Google Maps',
    category: 'Location',
    description: 'Open a specific place or search query in Google Maps',
    iconName: 'MapPin'
  },
  {
    id: 'coords',
    name: 'GPS Coordinates',
    category: 'Location',
    description: 'Precise latitude and longitude geolocation link',
    iconName: 'Compass'
  },

  // Media & Documents
  {
    id: 'pdf',
    name: 'PDF Document',
    category: 'Media & Apps',
    description: 'Link directly to hosted PDF menus, catalogs, or flyers',
    iconName: 'FileText'
  },
  {
    id: 'image',
    name: 'Image Gallery',
    category: 'Media & Apps',
    description: 'Direct link to high-res photo or graphic artwork',
    iconName: 'Image'
  },
  {
    id: 'video',
    name: 'Video Stream',
    category: 'Media & Apps',
    description: 'Link to YouTube, Vimeo, or MP4 video URL',
    iconName: 'Video'
  },
  {
    id: 'appstore',
    name: 'App Store',
    category: 'Media & Apps',
    description: 'Direct download link for Apple iOS App Store',
    iconName: 'Apple'
  },
  {
    id: 'playstore',
    name: 'Play Store',
    category: 'Media & Apps',
    description: 'Direct download link for Google Play Android Store',
    iconName: 'Smartphone'
  },

  // Events & Crypto
  {
    id: 'event',
    name: 'Event Info',
    category: 'Links',
    description: 'Share event details, RSVP links, and schedules',
    iconName: 'Calendar'
  },
  {
    id: 'calendar',
    name: 'Calendar iCal',
    category: 'Links',
    description: 'Add an event directly to user calendar upon scanning',
    iconName: 'CalendarPlus'
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    category: 'Links',
    description: 'Receive Bitcoin, Ethereum, Solana, or USDT payments',
    iconName: 'Coins'
  },
  {
    id: 'social',
    name: 'Social Profile',
    category: 'Links',
    description: 'Deep link to Instagram, Twitter/X, LinkedIn, or TikTok',
    iconName: 'Share2'
  }
];

export const CATEGORIES = ['All', 'Core', 'Communication', 'Links', 'Location', 'Media & Apps'] as const;
