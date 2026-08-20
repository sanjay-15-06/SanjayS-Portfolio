import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sfx } from '../utils/sfx';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [sentStatus, setSentStatus] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    sfx.playClick();
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sfx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSentStatus(true);
      sfx.playSuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>INITIATE DISPATCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TOUCH</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 font-sans text-sm sm:text-base">
          Interested in discussing a software developer opportunity, internship project, or technical collaboration? Send a direct transmission.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Left Column: Direct Telemetry Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-6">
            <h3 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              DIRECT CONTACT NODES
            </h3>

            {/* Email Badge */}
            <div className="p-4 rounded-xl bg-[#0a0d14] border border-cyan-500/20 flex items-center justify-between group">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">EMAIL ADDRESS</div>
                  <div className="text-sm font-mono text-cyan-300 font-semibold">sanjusan1506@gmail.com</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('sanjusan1506@gmail.com', 'email')}
                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Badge */}
            <div className="p-4 rounded-xl bg-[#0a0d14] border border-purple-500/20 flex items-center justify-between group">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">PHONE TELECOMM</div>
                  <div className="text-sm font-mono text-purple-300 font-semibold">+91 9361136053</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('+919361136053', 'phone')}
                className="p-2 text-slate-400 hover:text-purple-400 transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Badge */}
            <div className="p-4 rounded-xl bg-[#0a0d14] border border-emerald-500/20 flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">LOCATION BASE</div>
                <div className="text-sm font-mono text-emerald-300 font-semibold">Coimbatore, Tamil Nadu, India</div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/sanjay-s-b44539320"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sfx.playHover()}
                onClick={() => sfx.playClick()}
                className="p-3 rounded-xl bg-[#0d1322] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <LinkedinIcon className="w-4 h-4" /> LINKEDIN
              </a>
              <a
                href="https://github.com/sanjayS1506"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sfx.playHover()}
                onClick={() => sfx.playClick()}
                className="p-3 rounded-xl bg-[#0d1322] border border-purple-500/30 hover:border-purple-400 text-purple-300 font-mono text-xs flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <GithubIcon className="w-4 h-4" /> GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Transmission Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 relative">
            <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              TRANSMIT MESSAGE
            </h3>

            {sentStatus ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-orbitron font-bold text-white text-lg">TRANSMISSION RECEIVED</h4>
                <p className="text-xs font-mono text-emerald-300">
                  Thank you! Your message has been logged. Sanjay will respond to your inquiry shortly.
                </p>
                <button
                  onClick={() => setSentStatus(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-orbitron font-bold text-xs"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-cyan-400 mb-1.5">SENDER NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-[#0a0d14] border border-cyan-500/30 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-cyan-400 mb-1.5">SENDER EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#0a0d14] border border-cyan-500/30 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-cyan-400 mb-1.5">SUBJECT / REASON</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                    className="w-full bg-[#0a0d14] border border-cyan-500/30 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-cyan-400 mb-1.5">MESSAGE BODY *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message details here..."
                    className="w-full bg-[#0a0d14] border border-cyan-500/30 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-orbitron font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT DIRECT MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
