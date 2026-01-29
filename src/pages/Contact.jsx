import { useCallback, useMemo, useState } from "react";

export default function Contact() {
  const formAction = useMemo(
    () =>
      import.meta.env.VITE_CONTACT_FORM_ACTION ||
      "https://formspree.io/f/maqjqvnq",
    []
  );

  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (status.submitting) return;

      const form = event.currentTarget;
      setStatus({ submitting: true, succeeded: false, error: null });

      try {
        const formData = new FormData(form);
        const response = await fetch(formAction, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Form submission failed (${response.status})`);
        }

        setStatus({ submitting: false, succeeded: true, error: null });
        form.reset();

        // Stay on the same route, but refresh the page state.
        window.setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch (_error) {
        setStatus({
          submitting: false,
          succeeded: false,
          error: "There was a problem sending your message. Please try again.",
        });
      }
    },
    [formAction, status.submitting]
  );

  return (
    <div className="container">
      <section>
        <h1 className="section-title">Get in touch</h1>
        <p className="section-subtitle">
          I&apos;m actively seeking internship opportunities in web development,
          WordPress, and data-related roles.
        </p>
      </section>

      <section className="grid-2">
        <div className="glass-card">
          <h2 className="timeline-title" style={{ marginTop: 0 }}>
            Details
          </h2>
          <p className="timeline-description">Email: Srihan.v.s@gmail.com</p>
          <p className="timeline-description">
            Location: Available for Remote &amp; On-site
          </p>
          <p className="timeline-description">Availability: Open to Internships</p>

          <div className="tags">
            {[
              { href: "https://github.com/srihan-max/", label: "GitHub" },
              {
                href: "https://www.linkedin.com/in/srihan-pampana-80b995381/",
                label: "LinkedIn",
              },
              { href: "mailto:Srihan.v.s@gmail.com", label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                className="tag"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className="timeline-title" style={{ marginTop: 0 }}>
            Send a message
          </h2>

          {status.succeeded ? (
            <p className="timeline-description" role="status">
              Thanks! Your message has been sent.
            </p>
          ) : (
            <form
              className="form"
              action={formAction}
              method="POST"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="_subject" value="New portfolio message" />

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={6} />
              </div>

              <button type="submit" className="cta-button" disabled={status.submitting}>
                {status.submitting ? "Sending…" : "Send message"}
              </button>

              {status.error ? (
                <p className="timeline-description" role="alert">
                  {status.error}
                </p>
              ) : null}
            </form>
          )}
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <div className="glass-card">
          <h2 className="timeline-title" style={{ marginTop: 0 }}>
            Looking for opportunities
          </h2>
          <p className="timeline-description">
            I&apos;m currently seeking internship positions where I can contribute my
            skills in web development, WordPress, SQL, and Python.
          </p>
        </div>
      </section>
    </div>
  );
}