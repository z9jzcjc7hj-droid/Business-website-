import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { testimonials } from '../data/siteData.js';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-brand-charcoal">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Customer Reviews</p>
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading mx-auto">
            The testimonials below are placeholders shown for layout purposes — swap them out with
            real Google or Facebook reviews as they come in.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((review, i) => (
            <Reveal key={review.id} delay={i * 0.08}>
              <div className="relative card h-full p-7">
                {review.placeholder && (
                  <span className="absolute right-4 top-4 rounded-full bg-yellow-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-400 ring-1 ring-yellow-500/30">
                    Placeholder
                  </span>
                )}
                <Quote className="text-brand-purple-500/40" size={28} />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-brand-purple-400 text-brand-purple-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.vehicle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Replace these with real reviews in{' '}
          <code className="rounded bg-white/5 px-1.5 py-0.5">src/data/siteData.js</code> (
          <code className="rounded bg-white/5 px-1.5 py-0.5">testimonials</code>).
        </p>
      </div>
    </section>
  );
}
