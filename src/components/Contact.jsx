import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('soxy1vmtjdr');

  // Redirect to a thank-you page after success
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.location.href = 'https://forminit.com/thank-you';
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
      <h4 className="text-center mb-2 text-lg font-Ovo">Contact</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Please use the form below to get in touch. We look forward to hearing from you.</p>

      {state.succeeded && (
        <div className="form-message success mx-auto max-w-2xl" role="status" style={{
          padding: '1rem', borderRadius: '8px', fontWeight: 500,
          backgroundColor: '#d1fae5', color: '#059669', border: '1px solid #a7f3d0',
          marginBottom: '1rem'
        }}>
          Thanks! Your message has been sent. Redirecting…
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" noValidate>
        <input type="hidden" name="_subject" value="Portfolio - New form Submission" />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <div className="flex-1">
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" required placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-white/10" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" required placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-white/10" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input id="subject" name="subject" type="text" required placeholder="What's this about?" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-white/10 mb-6" />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" rows={6} required placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-white/10"></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Honeypot to reduce spam */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/50" disabled={state.submitting}>
          {state.submitting ? 'Sending…' : 'Submit now'}
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" aria-hidden="true" />
        </button>

        {state.errors && state.errors.length > 0 && (
          <p className='mt-4 form-message error' role='alert' style={{
            padding: '1rem', borderRadius: '8px', fontWeight: 500,
            backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca'
          }}>
            There was a problem sending your message. Please check the fields and try again.
          </p>
        )}
      </form>
    </div>
  )
}
