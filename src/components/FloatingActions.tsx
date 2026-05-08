import React, { useState } from 'react';
import { MessageCircle, Play, Share2, X, Link as LinkIcon, Linkedin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FloatingActions() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-20 md:bottom-28 right-4 md:right-8 z-[60] flex flex-col items-end space-y-3 md:space-y-4">
      {/* Share Menu */}
      <AnimatePresence>
        {isShareOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-1.5 md:p-2 shadow-2xl flex flex-col space-y-1.5 md:space-y-2 mb-2"
          >
            {shareLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                title={link.name}
              >
                <link.icon size={16} />
              </a>
            ))}
            <button
              onClick={copyLink}
              className="p-2.5 md:p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white relative"
              title="Copy Link"
            >
              {copied ? <CheckCircle size={16} className="text-emerald-500" /> : <LinkIcon size={16} />}
              {copied && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] rounded-md whitespace-nowrap"
                >
                  Copied!
                </motion.span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end space-y-3 md:space-y-4">
        {/* Quick Demo Request */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden sm:block"
        >
          <Link
            to="/start-project"
            className="flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl shadow-2xl hover:scale-105 transition-transform group"
          >
            <Play size={18} className="fill-current" />
            <span className="text-sm font-bold">Start Project</span>
          </Link>
        </motion.div>

        <div className="flex space-x-3 md:space-x-4">
          <motion.button
            onClick={() => setIsShareOpen(!isShareOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-[#111] text-black dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl border border-black/5 dark:border-white/10"
          >
            {isShareOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Share2 className="w-5 h-5 md:w-6 md:h-6" />}
          </motion.button>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/918618764541"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20 relative group"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#25D366] rounded-xl md:rounded-2xl -z-10"
            />
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
