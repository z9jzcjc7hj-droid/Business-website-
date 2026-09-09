import { Truck, Wrench, Eye, CalendarCheck, UserCheck, MapPin } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { whyChooseUs } from '../data/siteData.js';

const icons = { Truck, Wrench, Eye, CalendarCheck, UserCheck, MapPin };

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-charcoal">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why Choose R&amp;N</p>
          <h2 className="section-heading">The Detail-Obsessed Difference</h2>
          <p className="section-subheading mx-auto">
            We built R&amp;N Detailing around convenience, quality, and consistency — so you get a
            great result every single time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple-500/40 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple-500/20 to-brand-purple-800/20 text-brand-purple-300 ring-1 ring-brand-purple-500/30">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
