import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "soxy1vmtjdr";
  const [state, handleSubmit] = useForm(formId);

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

          {state.succeeded ? (
            <p className="timeline-description" role="status">
              Thanks! Your message has been sent.
            </p>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="_subject" value="New portfolio message" />

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={6} />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="cta-button" disabled={state.submitting}>
                {state.submitting ? "Sending…" : "Send message"}
              </button>

              {state.errors?.length ? (
                <p className="timeline-description" role="alert">
                  There was a problem sending your message. Please try again.
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