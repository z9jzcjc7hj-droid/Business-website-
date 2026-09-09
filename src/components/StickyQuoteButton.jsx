import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

// Persistent "Get a Quote" button for mobile — the desktop nav already keeps
// one visible at all times, but on small screens the nav CTA is hidden
// inside the hamburger menu, so this floating button fills that gap.
export default function StickyQuoteButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const target = document.querySelector('#quote');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="btn-primary fixed bottom-5 right-5 z-40 !py-3 !px-5 !text-sm shadow-glow-lg lg:hidden"
          aria-label="Get a free quote"
        >
          <CalendarCheck size={17} />
          Get a Quote
        </motion.button>
      )}
    </AnimatePresence>
  );
}
