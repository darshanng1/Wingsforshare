import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Mail, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '918618764541'; // +91 86187 64541

const TOPICS = [
  { label: 'Web Development', text: "Hi WingsForShare, I'd like help with a website / web development project." },
  { label: 'SEO Services', text: "Hi WingsForShare, I'd like help with SEO for my business." },
  { label: 'Social Media Marketing', text: "Hi WingsForShare, I'd like help with social media marketing." },
  { label: 'App Development', text: "Hi WingsForShare, I'd like help building a mobile app." },
  { label: 'Business Analytics', text: "Hi WingsForShare, I'd like help with business analytics / dashboards." },
  { label: 'Something else', text: "Hi WingsForShare, I'd like to discuss a project." }
];

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 md:right-8 z-[80] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[330px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden shadow-2xl border border-card-border bg-card-bg"
            role="dialog"
            aria-label="Chat with WingsForShare"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-emerald-600 p-5 text-white relative">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center font-black">W</div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold leading-tight">WingsForShare</p>
                  <p className="text-[11px] text-white/85">Typically replies within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="bg-bg border border-card-border rounded-2xl rounded-tl-sm p-4 mb-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Hi there! 👋 What can we help you with? Pick a topic to start the chat on WhatsApp,
                  or email us — whichever you prefer.
                </p>
                <div className="flex items-center gap-1 mt-3" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>

              {/* Topic quick replies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {TOPICS.map((t) => (
                  <a
                    key={t.label}
                    href={waLink(t.text)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-full bg-bg border border-card-border text-[11px] font-bold text-text-secondary hover:text-accent hover:border-accent/40 transition-all"
                  >
                    {t.label}
                  </a>
                ))}
              </div>

              <a
                href={waLink(TOPICS[5].text)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-bold hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <MessageCircle size={18} />
                Start WhatsApp Chat
              </a>

              <a
                href="mailto:info@wingsforshare.com"
                className="flex items-center justify-center gap-3 w-full py-3.5 mt-2 rounded-2xl bg-bg border border-card-border text-text-primary font-bold hover:border-accent transition-all"
              >
                <Mail size={18} />
                Email info@wingsforshare.com
              </a>

              <p className="text-center text-[10px] text-text-secondary/60 mt-4">
                Powered by WingsForShare · We reply within 24 hours
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? 'Close chat' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-emerald-500/30 font-bold"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />}
        <span className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          {open ? <X size={16} /> : <MessageCircle size={16} />}
        </span>
        <span className="relative text-sm">{open ? 'Close' : 'Chat with us'}</span>
      </motion.button>
    </div>
  );
}
