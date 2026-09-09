import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

function scrollToQuote() {
  const target = document.querySelector('#quote');
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function CTASection({
  eyebrow = 'Ready When You Are',
  heading = 'Give Your Vehicle the Detail It Deserves',
  subheading = 'Book your mobile detail today and see why Cincinnati drivers trust R&N Detailing.',
  buttonLabel = 'Book Your Detail',
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple-900 via-brand-charcoal to-brand-black py-16 sm:py-20">
      <div className="absolute inset-0 bg-purple-radial" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{heading}</h2>
        <p className="mt-4 text-base text-gray-300">{subheading}</p>
        <button type="button" onClick={scrollToQuote} className="btn-primary mt-8">
          {buttonLabel}
          <ArrowRight size={18} />
        </button>
      </Reveal>
    </section>
  );
}
