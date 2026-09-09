import { Check, Star } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { packages } from '../data/siteData.js';

function scrollToQuote() {
  const target = document.querySelector('#quote');
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-brand-charcoal relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-purple-radial" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Detailing Packages</p>
          <h2 className="section-heading">Choose the Level of Care Your Vehicle Deserves</h2>
          <p className="section-subheading mx-auto">
            Three straightforward packages, each building on the last, so you can pick exactly
            how much attention your vehicle gets.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-center">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  pkg.highlighted
                    ? 'border-brand-purple-400/60 bg-gradient-to-b from-brand-purple-900/50 to-brand-charcoal2 shadow-glow-lg lg:scale-105'
                    : 'border-white/10 bg-card-gradient hover:border-brand-purple-500/30 hover:shadow-glow'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-purple-500 to-brand-purple-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                    <Star size={13} fill="currentColor" />
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-purple-300">{pkg.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{pkg.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={17} className="mt-0.5 shrink-0 text-brand-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={scrollToQuote}
                  className={`mt-8 w-full ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {pkg.ctaLabel}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not sure which package fits your vehicle? Request a free quote and we&rsquo;ll help you choose.
        </p>
      </div>
    </section>
  );
}
