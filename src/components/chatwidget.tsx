import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = '918618764541'; // +91 86187 64541
const WHATSAPP_TEXT = "Hi WingsForShare, I'd like to discuss a project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-4 md:left-8 z-[70] flex flex-col items-start">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden shadow-2xl border border-card-border bg-card-bg"
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
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center font-black">
                  W
                </div>
                <div>
                  <p className="font-bold leading-tight">WingsForShare</p>
                  <p className="text-[11px] text-white/85 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white inline-block" />
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              <div className="bg-bg border border-card-border rounded-2xl rounded-tl-sm p-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Hi there! 👋 Tell us what you need — web development, SEO, social media, apps or
                  business analytics — and we'll get back to you fast.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-bold hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:info@wingsforshare.com"
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-card-bg border border-card-border text-text-primary font-bold hover:border-accent transition-all"
              >
                <Mail size={18} />
                Email info@wingsforshare.com
              </a>
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
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />
        <span className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          {open ? <X size={16} /> : <MessageCircle size={16} />}
        </span>
        <span className="relative text-sm">{open ? 'Close' : 'Chat with us'}</span>
      </motion.button>
    </div>
  );
}
