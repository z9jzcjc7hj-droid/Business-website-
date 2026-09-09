import { Phone, Mail, MapPin, Facebook, Instagram, Music2, Star } from 'lucide-react';
import Logo from './Logo.jsx';
import { business, navLinks } from '../data/siteData.js';

function handleAnchorClick(e, href) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="sm" />
            <p className="mt-4 text-sm text-gray-400">
              {business.tagline}
              <br />
              {business.city}, {business.state}
            </p>
            <div className="mt-5 flex gap-3">
              {/* Update these hrefs in src/data/siteData.js once your social profiles are live */}
              <SocialIcon href={business.facebookUrl} label="Facebook"><Facebook size={17} /></SocialIcon>
              <SocialIcon href={business.instagramUrl} label="Instagram"><Instagram size={17} /></SocialIcon>
              <SocialIcon href={business.tiktokUrl} label="TikTok"><Music2 size={17} /></SocialIcon>
              <SocialIcon href={business.googleBusinessUrl} label="Google Business Profile"><Star size={17} /></SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-gray-400 hover:text-brand-purple-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#quote"
                  onClick={(e) => handleAnchorClick(e, '#quote')}
                  className="text-sm text-gray-400 hover:text-brand-purple-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={15} className="text-brand-purple-400 shrink-0" />
                <a href={business.phoneHref} className="hover:text-white transition-colors">{business.phone}</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={15} className="text-brand-purple-400 shrink-0" />
                <a href={business.emailHref} className="hover:text-white transition-colors">{business.email}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 text-brand-purple-400 shrink-0" />
                {business.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Service Area</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Proudly serving {business.city}, {business.state} and surrounding areas within
              approximately {business.serviceRadius}.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Mobile Auto Detailing &middot; Cincinnati, Ohio</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-brand-purple-400/60 hover:text-brand-purple-300 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
