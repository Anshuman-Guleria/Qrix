import { QRTypeID, QRDataContent } from '../types';

export function formatQRData(type: QRTypeID, data: QRDataContent): string {
  switch (type) {
    case 'url':
      return data.url || 'https://qrix.app';
      
    case 'text':
      return data.text || 'Generated with Qrix';
      
    case 'email': {
      const email = data.email || '';
      const subject = encodeURIComponent(data.subject || '');
      const body = encodeURIComponent(data.body || '');
      let mailto = `mailto:${email}`;
      const params: string[] = [];
      if (subject) params.push(`subject=${subject}`);
      if (body) params.push(`body=${body}`);
      if (params.length > 0) mailto += `?${params.join('&')}`;
      return mailto;
    }
    
    case 'phone':
      return `tel:${data.phone || ''}`;
      
    case 'sms': {
      const phone = data.phone || '';
      const msg = encodeURIComponent(data.message || '');
      return `sms:${phone}${msg ? `?body=${msg}` : ''}`;
    }
    
    case 'whatsapp': {
      const cleanPhone = (data.phone || '').replace(/[^0-9]/g, '');
      const text = encodeURIComponent(data.message || '');
      return `https://wa.me/${cleanPhone}${text ? `?text=${text}` : ''}`;
    }
    
    case 'wifi': {
      const ssid = data.ssid || '';
      const pass = data.password || '';
      const enc = data.encryption || 'WPA';
      const hidden = data.hidden ? 'true' : 'false';
      return `WIFI:S:${ssid};T:${enc};P:${pass};H:${hidden};;`;
    }
    
    case 'vcard': {
      const fn = `${data.firstName || ''} ${data.lastName || ''}`.trim();
      const n = `${data.lastName || ''};${data.firstName || ''};;;`;
      const org = data.organization || '';
      const title = data.title || '';
      const workTel = data.workPhone || '';
      const cellTel = data.mobilePhone || '';
      const email = data.email || '';
      const url = data.website || '';
      const street = data.street || '';
      const city = data.city || '';
      const state = data.state || '';
      const zip = data.zip || '';
      const country = data.country || '';
      
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${n}`,
        `FN:${fn || 'Contact'}`,
        org ? `ORG:${org}` : '',
        title ? `TITLE:${title}` : '',
        workTel ? `TEL;TYPE=WORK,VOICE:${workTel}` : '',
        cellTel ? `TEL;TYPE=CELL,VOICE:${cellTel}` : '',
        email ? `EMAIL;TYPE=PREF,INTERNET:${email}` : '',
        url ? `URL:${url}` : '',
        (street || city || state || zip || country) ? `ADR;TYPE=WORK:;;${street};${city};${state};${zip};${country}` : '',
        'END:VCARD'
      ].filter(Boolean).join('\r\n');
    }
    
    case 'maps':
      return data.mapsQuery 
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.mapsQuery)}`
        : 'https://maps.google.com';
        
    case 'coords':
      return `geo:${data.latitude || '0'},${data.longitude || '0'}`;
      
    case 'pdf':
      return data.pdfUrl || 'https://example.com/document.pdf';
      
    case 'image':
      return data.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe';
      
    case 'video':
      return data.videoUrl || 'https://youtube.com';
      
    case 'appstore':
      return data.appStoreUrl || 'https://apps.apple.com';
      
    case 'playstore':
      return data.playStoreUrl || 'https://play.google.com';
      
    case 'event': {
      const title = encodeURIComponent(data.eventTitle || 'Special Event');
      const desc = encodeURIComponent(data.eventDescription || '');
      const loc = encodeURIComponent(data.eventLocation || '');
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${desc}&location=${loc}`;
    }
    
    case 'calendar': {
      // iCalendar format (RFC 5545)
      const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      const formatCalDate = (str?: string) => {
        if (!str) return now;
        return new Date(str).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      };
      const start = formatCalDate(data.startDate);
      const end = formatCalDate(data.endDate);
      const summary = data.eventTitle || 'Calendar Event';
      const description = data.eventDescription || '';
      const location = data.eventLocation || '';
      
      return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Qrix Labs//Qrix QR Platform//EN',
        'BEGIN:VEVENT',
        `UID:qrix_${Date.now()}@qrix.app`,
        `DTSTAMP:${now}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${summary}`,
        description ? `DESCRIPTION:${description}` : '',
        location ? `LOCATION:${location}` : '',
        'END:VEVENT',
        'END:VCALENDAR'
      ].filter(Boolean).join('\r\n');
    }
    
    case 'crypto': {
      const addr = data.cryptoAddress || '';
      const coin = data.cryptoCurrency || 'bitcoin';
      const amount = data.cryptoAmount ? `?amount=${data.cryptoAmount}` : '';
      if (coin === 'bitcoin') return `bitcoin:${addr}${amount}`;
      if (coin === 'ethereum') return `ethereum:${addr}${amount}`;
      if (coin === 'solana') return `solana:${addr}${amount}`;
      if (coin === 'dogecoin') return `dogecoin:${addr}${amount}`;
      return `${coin}:${addr}${amount}`;
    }
    
    case 'social': {
      const handle = (data.socialHandle || '').replace(/^@/, '');
      const platform = data.socialPlatform || 'instagram';
      switch (platform) {
        case 'instagram': return `https://instagram.com/${handle}`;
        case 'twitter': return `https://x.com/${handle}`;
        case 'linkedin': return `https://linkedin.com/in/${handle}`;
        case 'tiktok': return `https://tiktok.com/@${handle}`;
        case 'youtube': return `https://youtube.com/@${handle}`;
        case 'github': return `https://github.com/${handle}`;
        case 'telegram': return `https://t.me/${handle}`;
        case 'discord': return `https://discord.gg/${handle}`;
        case 'threads': return `https://threads.net/@${handle}`;
        default: return `https://social.com/${handle}`;
      }
    }
    
    default:
      return 'https://qrix.app';
  }
}
