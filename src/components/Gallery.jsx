import { ImageOff } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { galleryItems } from '../data/siteData.js';

function PlaceholderPane({ label }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,#17171c_0px,#17171c_10px,#1f1f26_10px,#1f1f26_20px)] text-gray-500">
      <ImageOff size={22} />
      <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-brand-black">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Real Results</p>
          <h2 className="section-heading">Before &amp; After Gallery</h2>
          <p className="section-subheading mx-auto">
            A look at the kind of transformation we deliver. The images below are placeholders —
            this section is ready to display real project photos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <div className="card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple-500/40 hover:shadow-glow">
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  <div className="aspect-[3/4]">
                    {item.beforeImg ? (
                      <img
                        src={item.beforeImg}
                        alt={`Before: ${item.label}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <PlaceholderPane label="Before" />
                    )}
                  </div>
                  <div className="aspect-[3/4]">
                    {item.afterImg ? (
                      <img
                        src={item.afterImg}
                        alt={`After: ${item.label}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <PlaceholderPane label="After" />
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-200">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Placeholder gallery — replace image paths in{' '}
          <code className="rounded bg-white/5 px-1.5 py-0.5">src/data/siteData.js</code> (
          <code className="rounded bg-white/5 px-1.5 py-0.5">galleryItems</code>) with real
          before/after photos once available.
        </p>
      </div>
    </section>
  );
}
