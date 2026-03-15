import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function MobileCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-black/5 dark:border-white/10"
        >
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/918618764541"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
            >
              <MessageCircle size={20} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <Link
              to="/start-project"
              className="flex-1 flex items-center justify-center space-x-2 bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl font-bold shadow-lg shadow-black/10 dark:shadow-white/10 active:scale-95 transition-transform"
            >
              <Phone size={20} />
              <span className="text-sm">Start Project</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
