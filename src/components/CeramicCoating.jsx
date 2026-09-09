import { Droplets, Sparkles, Wind, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { ceramicBenefits } from '../data/siteData.js';

const icons = { Droplets, Sparkles, Wind, ShieldCheck, Clock };

function scrollToQuote() {
  const target = document.querySelector('#quote');
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function CeramicCoating() {
  return (
    <section id="ceramic-coating" className="section-padding bg-brand-black relative overflow-hidden">
      <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-purple-600/15 blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="section-eyebrow">Ceramic Coating</p>
          <h2 className="section-heading">Long-Lasting Paint Protection</h2>
          <p className="section-subheading">
            Our ceramic coating creates a durable, glass-like layer that bonds to your vehicle&rsquo;s
            paint — protecting it from the elements while giving it a showroom-quality shine that
            lasts far longer than traditional wax.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-brand-purple-500/30 bg-brand-purple-500/5 p-5">
            <div className="text-3xl sm:text-4xl font-bold text-white">$750</div>
            <div className="text-sm text-gray-400">
              Starting price
              <br />
              Final cost depends on vehicle size &amp; paint condition
            </div>
          </div>

          <button type="button" onClick={scrollToQuote} className="btn-primary mt-8">
            Request a Ceramic Coating Quote
            <ArrowRight size={18} />
          </button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {ceramicBenefits.map((benefit, i) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal key={benefit.title} delay={i * 0.07}>
                <div className="card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple-500/40 hover:shadow-glow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple-500/10 text-brand-purple-300 ring-1 ring-brand-purple-500/30">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
