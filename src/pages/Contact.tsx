import React, { useState } from 'react';
import { submitFeedback } from '../lib/analytics';
import { 
  Mail, Github, Linkedin, Send, CheckCircle2, Globe, 
  MapPin, Clock, MessageSquare, Shield, ArrowRight, Sparkles 
} from 'lucide-react';

interface ContactProps {
  onSuccessToast: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    setSubmitting(true);
    try {
      await submitFeedback({
        type: 'suggestion',
        title: `[CONTACT] ${subject || name || 'General Inquiry'}`,
        description: `From Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        email: email.trim()
      });
      setSubmitted(true);
      onSuccessToast();
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    /* 
      LAYOUT UPDATE (Requirement 4):
      - Removed `overflow-y-auto` to allow the page to expand and scroll at the document/viewport level.
      - Keeps `flex-1` and spacing parameters exactly the same to preserve the design.
    */
    <div className="flex-1 space-y-24 pb-32 pt-12 px-6 md:px-12 max-w-6xl mx-auto animate-fadeIn select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          Global Engineering HQ
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
          Get in <span className="accent-gradient-text">Touch</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 select-text">
          Have an enterprise partnership question, media inquiry, or custom feature request? Reach out directly to founder Anshuman Guleria and the Qrix core team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Info Columns */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-8 rounded-3xl glass border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white">Direct Connect</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:anshumanguleria305@gmail.com"
                className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase">Business & Founder Email</span>
                  <h4 className="text-sm font-bold text-white mt-0.5 select-text">anshumanguleria305@gmail.com</h4>
                </div>
              </a>

              

              <a 
                href="https://www.linkedin.com/in/anshuman-guleria"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase">Professional Network</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">Anshuman Guleria (Founder)</h4>
                </div>
              </a>
            </div>
          </div>

          <div className="p-8 rounded-3xl glass border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Typical engineering response time: <strong className="text-white">&lt; 12 Hours</strong></span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
              <span>Operating globally across cloud distributed nodes</span>
            </div>
          </div>

        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl glass-card border-white/15 shadow-2xl relative">
            <div className="orb w-[300px] h-[300px] bg-emerald-600/20 bottom-0 right-0 blur-[120px] -z-10" />

            {submitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-white">Message Dispatched</h3>
                <p className="text-zinc-400 text-sm select-text max-w-md">
                  Thank you for contacting Qrix. Your transmission has been routed directly to Anshuman Guleria's priority inbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-full glass text-white font-bold text-sm border border-white/20 hover:bg-white/10"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-black text-white pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>Send a Message</span>
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-zinc-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Anshuman Guleria"
                      className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 select-text text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-zinc-400 uppercase">Email Address <span className="text-purple-400">*</span></label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="founder@company.com"
                      className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 select-text text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-zinc-400 uppercase">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="e.g. Enterprise License or API Integration"
                    className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 select-text text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-zinc-400 uppercase">Message <span className="text-purple-400">*</span></label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="How can we help you build?"
                    className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 select-text text-sm sm:text-base resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 rounded-full accent-gradient text-black font-black text-base shadow-2xl shadow-purple-500/30 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? 'Transmitting...' : <><span>Dispatch Message</span> <Send className="w-5 h-5" /></>}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
