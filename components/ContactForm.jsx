'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Send } from 'lucide-react';
import { serviceFormOptions } from '@/lib/data';

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
const isConfigured = ENDPOINT && !ENDPOINT.includes('REPLACE_WITH_REAL_ID');

const inputClasses =
  'w-full min-h-[48px] rounded-card border border-orange-coral/20 bg-white px-4 py-3 text-base text-charcoal-deep placeholder:text-gray-muted transition-all duration-300 focus:border-orange-coral focus:outline-none focus:ring-2 focus:ring-orange-coral/25 focus:shadow-glow-peach';

function Field({ label, id, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-charcoal-deep">
        {label}
        {required && (
          <span className="text-orange-burnt" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!isConfigured) {
      // Formspree endpoint not set up yet — fail loudly instead of silently
      console.warn(
        'ContactForm: NEXT_PUBLIC_FORMSPREE_ENDPOINT is not configured. Set it in .env.local.'
      );
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus('success');
      reset();
    } catch (error) {
      console.error('ContactForm submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {!isConfigured && (
        <p className="rounded-card border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Note: the contact form is not connected yet. Please reach us on WhatsApp or by
          phone while we finish setting it up.
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" id="name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={errors.name ? 'true' : 'false'}
            className={inputClasses}
            {...register('name', { required: 'Please enter your name.' })}
          />
        </Field>
        <Field label="Email" id="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            className={inputClasses}
            {...register('email', {
              required: 'Please enter your email.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
            })}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" id="phone" required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            aria-invalid={errors.phone ? 'true' : 'false'}
            className={inputClasses}
            {...register('phone', {
              required: 'Please enter your phone number.',
              pattern: {
                value: /^[+\d][\d\s-]{7,15}$/,
                message: 'Please enter a valid phone number.',
              },
            })}
          />
        </Field>
        <Field label="Service" id="service" required error={errors.service?.message}>
          <select
            id="service"
            aria-invalid={errors.service ? 'true' : 'false'}
            className={inputClasses}
            defaultValue=""
            {...register('service', { required: 'Please select a service.' })}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceFormOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" id="message" required error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us what you need help with…"
          aria-invalid={errors.message ? 'true' : 'false'}
          className={inputClasses}
          {...register('message', { required: 'Please enter a message.' })}
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-card bg-gradient-to-r from-orange-coral to-orange-golden px-6 py-3 text-base font-bold text-white shadow-glow-orange transition-all duration-300 ease-bounce hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,107,53,0.7)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" /> Send Message
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="rounded-card border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            Thanks! We&apos;ll contact you within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-card border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            Sorry, something went wrong. Please try WhatsApp or call us directly.
          </p>
        )}
      </div>
    </form>
  );
}
