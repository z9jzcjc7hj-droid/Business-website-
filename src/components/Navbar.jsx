import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo.jsx';
import { navLinks, business } from '../data/siteData.js';

const NAV_OFFSET = 84; // px — accounts for sticky navbar height when scrolling to anchors

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-gradient-to-b from-brand-black/70 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 py-3">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} aria-label="R&N Detailing LLC home">
          <Logo size="sm" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-brand-purple-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Phone size={16} className="text-brand-purple-400" />
            {business.phone}
          </a>
          <a href="#quote" onClick={(e) => handleNavClick(e, '#quote')} className="btn-primary !py-2.5 !px-5 !text-sm">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-white"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-brand-black/98 backdrop-blur-lg border-b border-white/10"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              <div className="mb-4">
                <Logo size="sm" />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-brand-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={business.phoneHref}
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/5"
              >
                <Phone size={18} className="text-brand-purple-400" />
                {business.phone}
              </a>
              <a
                href="#quote"
                onClick={(e) => handleNavClick(e, '#quote')}
                className="btn-primary mt-3 w-full"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
