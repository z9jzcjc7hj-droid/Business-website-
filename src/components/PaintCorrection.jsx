import { Eye, Sparkles, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { paintCorrectionBenefits } from '../data/siteData.js';

const icons = { Eye, Sparkles, ShieldCheck, Clock };

function scrollToQuote() {
  const target = document.querySelector('#quote');
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function PaintCorrection() {
  return (
    <section id="paint-correction" className="section-padding bg-brand-charcoal relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-purple-600/15 blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
          {paintCorrectionBenefits.map((benefit, i) => {
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

        <Reveal className="order-1 lg:order-2">
          <p className="section-eyebrow">Paint Correction</p>
          <h2 className="section-heading">Restore Your Paint&rsquo;s True Finish</h2>
          <p className="section-subheading">
            Machine polishing removes swirl marks, light scratches, water spots, and oxidation —
            bringing back clarity and depth before we seal it in with wax, sealant, or ceramic
            coating.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-brand-purple-500/30 bg-brand-purple-500/5 p-5">
            <div className="text-2xl sm:text-3xl font-bold text-white">Custom Quote</div>
            <div className="text-sm text-gray-400">
              Pricing depends on paint condition &amp; correction stage required
            </div>
          </div>

          <button type="button" onClick={scrollToQuote} className="btn-primary mt-8">
            Request a Paint Correction Quote
            <ArrowRight size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
