import { Truck, Wrench, CalendarCheck, MapPin } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { trustPoints } from '../data/siteData.js';

const icons = { Truck, Wrench, CalendarCheck, MapPin };

export default function TrustBar() {
  return (
    <section id="trust" className="relative border-y border-white/10 bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustPoints.map((point, i) => {
            const Icon = icons[point.icon];
            return (
              <Reveal key={point.label} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-purple-500/10 text-brand-purple-300 ring-1 ring-brand-purple-500/30">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold text-gray-200 sm:text-base">
                    {point.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
