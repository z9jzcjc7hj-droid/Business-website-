import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheck, Phone } from 'lucide-react';
import { business } from '../data/siteData.js';

// Persistent Call + Quote buttons for mobile — the desktop nav already keeps
// a call link and quote CTA visible at all times, but on small screens the
// nav CTA is hidden inside the hamburger menu, so these floating buttons
// fill that gap.
export default function StickyQuoteButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleQuoteClick = () => {
    const target = document.querySelector('#quote');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 lg:hidden"
        >
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.phone}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-purple-500/40 bg-brand-charcoal text-brand-purple-300 shadow-card transition-colors hover:bg-brand-purple-500/10"
          >
            <Phone size={19} />
          </a>
          <button
            type="button"
            onClick={handleQuoteClick}
            className="btn-primary !py-3 !px-5 !text-sm shadow-glow-lg"
            aria-label="Get a free quote"
          >
            <CalendarCheck size={17} />
            Get a Quote
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
