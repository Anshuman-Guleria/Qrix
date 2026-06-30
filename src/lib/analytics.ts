import { FeedbackItem, AnalyticsSummary } from '../types';

// Local Storage Fallback Keys
const LOCAL_FEEDBACK_KEY = 'qrix_feedback_submissions';
const LOCAL_ANALYTICS_KEY = 'qrix_analytics_summary';

export function getLocalAnalytics(): AnalyticsSummary {
  try {
    const raw = localStorage.getItem(LOCAL_ANALYTICS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  // Seed realistic SaaS telemetry numbers
  const initial: AnalyticsSummary = {
    totalGenerated: 14892,
    totalDownloads: 12450,
    typePopularity: {
      url: 4200,
      vcard: 2100,
      wifi: 1850,
      whatsapp: 1400,
      social: 1200,
      text: 900,
      email: 850,
      maps: 700,
      crypto: 550,
      pdf: 500,
      event: 342,
      phone: 300
    },
    downloadsByType: {
      png: 7800,
      svg: 3100,
      pdf: 1050,
      jpeg: 500
    },
    devices: { desktop: 58, mobile: 34, tablet: 8 },
    browsers: { Chrome: 64, Safari: 22, Firefox: 8, Edge: 6 },
    returningVisitors: 42
  };

  try {
    localStorage.setItem(LOCAL_ANALYTICS_KEY, JSON.stringify(initial));
  } catch (e) {}

  return initial;
}

export function logQRGenerated(type: string) {
  try {
    const stats = getLocalAnalytics();
    stats.totalGenerated += 1;
    stats.typePopularity[type] = (stats.typePopularity[type] || 0) + 1;
    localStorage.setItem(LOCAL_ANALYTICS_KEY, JSON.stringify(stats));
  } catch (e) {}
}

export function logQRDownloaded(type: string, format: string) {
  try {
    const stats = getLocalAnalytics();
    stats.totalDownloads += 1;
    stats.downloadsByType[format] = (stats.downloadsByType[format] || 0) + 1;
    localStorage.setItem(LOCAL_ANALYTICS_KEY, JSON.stringify(stats));
  } catch (e) {}
}

export async function submitFeedback(item: Omit<FeedbackItem, 'id' | 'createdAt' | 'status'>): Promise<FeedbackItem> {
  const newItem: FeedbackItem = {
    ...item,
    id: 'msg_' + Math.random().toString(36).substring(2, 11),
    createdAt: Date.now(),
    status: 'new'
  };

  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_FEEDBACK_KEY) || '[]');
    localStorage.setItem(LOCAL_FEEDBACK_KEY, JSON.stringify([newItem, ...existing]));
  } catch (e) {}

  // Return simulated successful promise
  return Promise.resolve(newItem);
}
