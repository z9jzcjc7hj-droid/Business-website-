import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin as MapPinIcon } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { business, vehicleTypes, vehicleConditions, serviceInterestOptions } from '../data/siteData.js';

const initialState = {
  name: '',
  phone: '',
  email: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleType: '',
  vehicleCondition: '',
  services: [],
  preferredDate: '',
  preferredTime: '',
  address: '',
  notes: '',
  company: '', // honeypot field — real users never fill this in
};

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function QuoteForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const has = prev.services.includes(service);
      return {
        ...prev,
        services: has ? prev.services.filter((s) => s !== service) : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // -----------------------------------------------------------------
    // FORM BACKEND
    // This defaults to Netlify Forms, which works automatically once this
    // site is deployed on Netlify (see the hidden form in index.html).
    //
    // TO USE FORMSPREE INSTEAD:
    //   1. Create a form at https://formspree.io and grab your endpoint,
    //      e.g. https://formspree.io/f/xxxxabcd
    //   2. Replace the fetch() call below with:
    //        const res = await fetch('https://formspree.io/f/xxxxabcd', {
    //          method: 'POST',
    //          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    //          body: JSON.stringify(formData),
    //        });
    //   3. You can then remove the hidden form block from index.html.
    // -----------------------------------------------------------------
    try {
      const payload = { ...formData, services: formData.services.join(', ') };
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify({ 'form-name': 'quote-request', ...payload }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData(initialState);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="quote" className="section-padding bg-brand-black relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-brand-purple-radial" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="section-eyebrow">Get Started</p>
          <h2 className="section-heading">Request Your Free Quote</h2>
          <p className="section-subheading">
            Tell us about your vehicle and we&rsquo;ll follow up with pricing and available times.
            No obligation, no pressure — just a straightforward quote.
          </p>

          <div className="mt-8 space-y-4">
            <a href={business.phoneHref} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-500/10 text-brand-purple-300 ring-1 ring-brand-purple-500/30">
                <Phone size={17} />
              </span>
              {business.phone}
            </a>
            <a href={business.emailHref} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-500/10 text-brand-purple-300 ring-1 ring-brand-purple-500/30">
                <Mail size={17} />
              </span>
              {business.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-500/10 text-brand-purple-300 ring-1 ring-brand-purple-500/30">
                <MapPinIcon size={17} />
              </span>
              Cincinnati, OH &middot; ~50-mile service radius
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          {/*
            Note: data-netlify / netlify-honeypot attributes only need to
            live on the static hidden form in index.html — that's what
            Netlify's build bots scan to register the form. This live form
            just needs to POST the same "form-name" and field names, which
            handleSubmit takes care of.
          */}
          <form
            onSubmit={handleSubmit}
            name="quote-request"
            className="card space-y-5 p-6 sm:p-8"
          >
            {/* Honeypot field — hidden from real users, catches basic bots */}
            <input type="hidden" name="form-name" value="quote-request" />
            <div className="hidden">
              <label>
                Don&rsquo;t fill this out: <input name="company" value={formData.company} onChange={handleChange} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="input-field" placeholder="Jane Doe"
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="input-field" placeholder="(513) 555-0123"
                />
              </Field>
            </div>

            <Field label="Email Address" required>
              <input
                type="email" name="email" required value={formData.email} onChange={handleChange}
                className="input-field" placeholder="you@example.com"
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Vehicle Year" required>
                <input
                  type="text" name="vehicleYear" required value={formData.vehicleYear} onChange={handleChange}
                  className="input-field" placeholder="2021"
                />
              </Field>
              <Field label="Vehicle Make" required>
                <input
                  type="text" name="vehicleMake" required value={formData.vehicleMake} onChange={handleChange}
                  className="input-field" placeholder="Honda"
                />
              </Field>
              <Field label="Vehicle Model" required>
                <input
                  type="text" name="vehicleModel" required value={formData.vehicleModel} onChange={handleChange}
                  className="input-field" placeholder="Accord"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Vehicle Type" required>
                <select
                  name="vehicleType" required value={formData.vehicleType} onChange={handleChange}
                  className="input-field"
                >
                  <option value="" disabled>Select vehicle type</option>
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </Field>
              <Field label="Approximate Vehicle Condition" required>
                <select
                  name="vehicleCondition" required value={formData.vehicleCondition} onChange={handleChange}
                  className="input-field"
                >
                  <option value="" disabled>Select condition</option>
                  {vehicleConditions.map((condition) => (
                    <option key={condition} value={condition}>{condition}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Services Interested In">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {serviceInterestOptions.map((service) => {
                  const checked = formData.services.includes(service);
                  return (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                        checked
                          ? 'border-brand-purple-400/60 bg-brand-purple-500/10 text-white'
                          : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="accent-brand-purple-500"
                        checked={checked}
                        onChange={() => handleServiceToggle(service)}
                      />
                      {service}
                    </label>
                  );
                })}
              </div>
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Preferred Date">
                <input
                  type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange}
                  className="input-field"
                />
              </Field>
              <Field label="Preferred Time">
                <input
                  type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                  className="input-field"
                />
              </Field>
            </div>

            <Field label="Customer Address / Location" required>
              <input
                type="text" name="address" required value={formData.address} onChange={handleChange}
                className="input-field" placeholder="Street address, city, or general area"
              />
            </Field>

            <Field label="Additional Information">
              <textarea
                name="notes" rows={4} value={formData.notes} onChange={handleChange}
                className="input-field resize-none" placeholder="Anything else we should know?"
              />
            </Field>

            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
              {status === 'submitting' ? 'Sending...' : 'Request My Free Quote'}
              {status !== 'submitting' && <Send size={18} />}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400 ring-1 ring-green-500/30">
                <CheckCircle2 size={18} />
                Thanks! Your quote request was sent — we&rsquo;ll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-500/30">
                <AlertCircle size={18} />
                Something went wrong. Please try again, or contact us directly by phone or email.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-brand-purple-400">*</span>}
      </span>
      {children}
    </label>
  );
}
