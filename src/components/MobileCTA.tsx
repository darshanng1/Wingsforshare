import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MobileCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden"
        >
          <Link
            to="/payment"
            className="flex items-center justify-center space-x-2 w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold shadow-2xl shadow-black/20 dark:shadow-white/10 active:scale-95 transition-transform"
          >
            <span>Get Started Now</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
