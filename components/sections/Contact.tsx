'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, XCircle } from 'lucide-react';

declare global {
  interface Window {
    emailjs: {
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<void>;
    };
  }
}

const EMAILJS_SERVICE = 'service_zaxjxdw';
const EMAILJS_TEMPLATE = 'template_31gq4rx';
const EMAILJS_KEY = 'i7doaSL6Xzgqtr5kv';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const isValid = fullname.trim() && email.trim() && message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus('sending');
    try {
      await window.emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        fullname,
        email,
        message,
      });
      setStatus('success');
      setFullname('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <>
      {/* EmailJS SDK */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';s.onload=function(){emailjs.init({publicKey:'${EMAILJS_KEY}'})};document.head.appendChild(s)})()`,
        }}
      />

      <article className="space-y-5">
        <header className="glass rounded-2xl px-6 py-5">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
        </header>

        {/* Map */}
        <div className="glass rounded-2xl overflow-hidden h-[220px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.99!2d28.847662!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul!5e0!3m2!1str!2str!4v1700000000000"
            width="100%"
            height="100%"
            loading="lazy"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact form */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-base font-medium text-white mb-5">Send a Message</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-[#555566] uppercase tracking-wider block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#444455] focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#555566] uppercase tracking-wider block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#444455] focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-[#555566] uppercase tracking-wider block mb-1.5">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                required
                rows={5}
                className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#444455] focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-200 resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                type="submit"
                disabled={!isValid || status === 'sending'}
                whileHover={{ scale: isValid ? 1.02 : 1 }}
                whileTap={{ scale: isValid ? 0.98 : 1 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isValid
                    ? 'bg-blue-500/20 border border-blue-500/40 text-blue-400 hover:bg-blue-500/30 cursor-pointer'
                    : 'bg-white/[0.03] border border-white/[0.07] text-[#444455] cursor-not-allowed'
                }`}
              >
                <Send size={14} />
                <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-green-400 text-sm"
                >
                  <CheckCircle size={15} />
                  <span>Message sent!</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-red-400 text-sm"
                >
                  <XCircle size={15} />
                  <span>Something went wrong.</span>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </article>
    </>
  );
}
