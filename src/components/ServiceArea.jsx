import { MapPin, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal.jsx';

const nearbyAreas = [
  'Cincinnati',
  'Norwood',
  'Blue Ash',
  'Mason',
  'West Chester',
  'Hamilton',
  'Fairfield',
  'Middletown',
  'Loveland',
  'Milford',
  'Anderson Township',
  'Covington, KY',
  'Newport, KY',
  'Florence, KY',
];

export default function ServiceArea() {
  return (
    <section className="section-padding bg-brand-black relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="section-eyebrow">Service Area</p>
          <h2 className="section-heading">Serving Cincinnati, Ohio &amp; Surrounding Areas</h2>
          <p className="section-subheading">
            R&amp;N Detailing is a fully mobile auto detailing company based in Cincinnati, Ohio,
            proudly serving customers within approximately a 50-mile radius. Wherever you are —
            home, work, or elsewhere — we bring the detail shop to you.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300"
              >
                <CheckCircle2 size={13} className="text-brand-purple-400" />
                {area}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Don&rsquo;t see your area listed? Reach out — we regularly service communities throughout
            Greater Cincinnati and beyond, and we&rsquo;re happy to confirm availability for your
            location.
          </p>
        </Reveal>

        {/* Stylized service-radius graphic */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-brand-purple-500/20" />
            <div className="absolute inset-[12%] rounded-full border border-brand-purple-500/25" />
            <div className="absolute inset-[24%] rounded-full border border-brand-purple-500/30 animate-pulse-glow" />
            <div className="absolute inset-[36%] rounded-full border border-brand-purple-500/40" />
            <div className="absolute inset-0 rounded-full bg-brand-purple-radial" />

            <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl bg-brand-charcoal/90 px-6 py-5 text-center shadow-glow ring-1 ring-brand-purple-500/40">
              <MapPin className="text-brand-purple-300" size={26} />
              <span className="text-sm font-bold uppercase tracking-wider text-white">Cincinnati, OH</span>
              <span className="text-xs text-gray-400">~50-mile service radius</span>
            </div>

            {/* Directional labels */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] font-medium text-gray-500">North</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-medium text-gray-500">South</span>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] font-medium text-gray-500">West</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-medium text-gray-500">East</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
