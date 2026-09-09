import {
  Sparkles,
  Droplets,
  Car,
  PawPrint,
  ShieldCheck,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';
import Reveal from './Reveal.jsx';
import { services, basicDetailPricing, addOns } from '../data/siteData.js';

const icons = { Sparkles, Droplets, Car, PawPrint, ShieldCheck, Layers };

function scrollToQuote() {
  const target = document.querySelector('#quote');
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-black">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-heading">Detailing Services Built Around Your Vehicle</h2>
          <p className="section-subheading">
            From a quick refresh to a full deep-clean, every service is performed on-site using
            professional-grade equipment and premium products.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="group card h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple-500/40 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple-500/10 text-brand-purple-300 ring-1 ring-brand-purple-500/30 transition-colors group-hover:bg-brand-purple-500/20">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{service.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-purple-300">{service.priceLabel}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Pricing */}
        <Reveal delay={0.1} className="mt-20">
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-brand-purple-900/40 to-brand-charcoal p-8 sm:p-10 flex flex-col justify-center">
                <p className="section-eyebrow">Basic Detail Pricing</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Transparent Starting Rates
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  These starting prices give you a realistic baseline. Final pricing may vary
                  depending on vehicle size, condition, and requested services — every quote is
                  confirmed with you before we start.
                </p>
                <button type="button" onClick={scrollToQuote} className="btn-primary mt-6 self-start">
                  Get Your Custom Quote
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="lg:col-span-3 p-8 sm:p-10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Basic Detail — Starting At
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {basicDetailPricing.map((item) => (
                    <div
                      key={item.type}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center transition-colors hover:border-brand-purple-500/40"
                    >
                      <p className="text-sm text-gray-400">{item.type}</p>
                      <p className="mt-1 text-2xl font-bold text-white">${item.price}</p>
                    </div>
                  ))}
                </div>

                <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Popular Add-Ons
                </h4>
                <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10">
                  {addOns.map((addon) => (
                    <div key={addon.name} className="flex items-center justify-between px-5 py-3.5">
                      <span className="text-sm text-gray-300">{addon.name}</span>
                      <span className="text-sm font-semibold text-brand-purple-300">{addon.price}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 flex items-start gap-2 text-xs text-gray-500">
                  <Info size={15} className="mt-0.5 shrink-0" />
                  Pricing above reflects typical starting rates. Final cost depends on vehicle
                  size, current condition, and the exact combination of services requested.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
