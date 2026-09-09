import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { faqs } from '../data/siteData.js';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-white">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-brand-charcoal">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="section-eyebrow">Frequently Asked Questions</p>
          <h2 className="section-heading">Answers Before You Book</h2>
          <p className="section-subheading mx-auto">
            Everything you need to know about mobile detailing with R&amp;N. Still have a question?
            Reach out and we&rsquo;ll get back to you quickly.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
