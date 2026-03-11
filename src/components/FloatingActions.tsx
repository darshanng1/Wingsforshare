import React, { useState } from 'react';
import { MessageCircle, Play, Share2, X, Link as LinkIcon, Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FloatingActions() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareLinks = [
    { icon: <Facebook size={18} />, name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
    { icon: <Twitter size={18} />, name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}` },
    { icon: <Linkedin size={18} />, name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="fixed bottom-28 right-8 z-[60] flex flex-col items-end space-y-4">
      {/* Share Menu */}
      <AnimatePresence>
        {isShareOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col space-y-2 mb-2"
          >
            {shareLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
            <button
              onClick={copyLink}
              className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              title="Copy Link"
            >
              <LinkIcon size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col space-y-4">
        {/* Quick Demo Request */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#consultation"
            className="flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl shadow-2xl hover:scale-105 transition-transform group"
          >
            <Play size={18} className="fill-current" />
            <span className="text-sm font-bold">Book Consultation</span>
          </a>
        </motion.div>

        <div className="flex space-x-4">
          {/* Share Button */}
          <motion.button
            onClick={() => setIsShareOpen(!isShareOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-white dark:bg-[#111] text-black dark:text-white rounded-2xl flex items-center justify-center shadow-2xl border border-black/5 dark:border-white/10"
          >
            {isShareOpen ? <X size={24} /> : <Share2 size={24} />}
          </motion.button>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/918618764541"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20 relative group"
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
              className="absolute inset-0 bg-[#25D366] rounded-2xl -z-10"
            />
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
