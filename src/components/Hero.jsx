import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

function scrollTo(href) {
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-black pt-24"
    >
      {/* Background layers — replace/augment with a real photo by adding an
          <img> here (e.g. a detailed vehicle exterior shot) behind the overlay. */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1120_0%,_#050506_65%)]" />
        <div className="absolute -left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-purple-600/25 blur-[120px]" />
        <div className="absolute -right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-brand-purple-500/20 blur-[110px]" />
        {/* Faint grid pattern for a technical/automotive feel */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#c084fc" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Abstract automotive line-art silhouette */}
        <svg
          className="absolute bottom-0 right-0 w-[70%] max-w-3xl opacity-[0.14] text-brand-purple-300 animate-float"
          viewBox="0 0 800 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 210 C 60 150, 140 120, 220 118 C 260 90, 340 70, 420 78 C 500 86, 560 110, 610 118 C 680 120, 740 150, 760 210 L 760 220 L 40 220 Z"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle cx="200" cy="220" r="34" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="600" cy="220" r="34" stroke="currentColor" strokeWidth="2.5" />
          <path d="M250 130 L 300 90 L 480 90 L 540 130" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow"
          >
            Mobile Auto Detailing &middot; Cincinnati, Ohio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Professional Mobile Auto Detailing in{' '}
            <span className="bg-gradient-to-r from-brand-purple-300 to-brand-purple-500 bg-clip-text text-transparent glow-text">
              Cincinnati, Ohio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl max-w-2xl"
          >
            We bring professional-grade detailing directly to you. From maintenance details to
            deep interior cleaning and premium paint protection, R&amp;N Detailing keeps your
            vehicle looking its best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button type="button" onClick={() => scrollTo('#quote')} className="btn-primary">
              Get a Free Quote
              <ArrowRight size={18} />
            </button>
            <button type="button" onClick={() => scrollTo('#services')} className="btn-secondary">
              View Services
            </button>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('#trust')}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-gray-500 hover:text-brand-purple-300 transition-colors sm:flex"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </button>
    </section>
  );
}
