import { Link } from "react-router-dom";

import profileImage from "src/assets/profile.png";

export default function Home() {
  return (
    <div className="container">
      <section>
        <p className="section-subtitle">Hi, I&apos;m in the second year of Computer Science in école d'informatique in Blagnac, France</p>

        <div className="hero-grid">
          <div className="hero-photo">
            <div className="avatar avatar-lg" aria-label="Profile photo">
              <img
                src={profileImage}
                alt="Srihan.V.S.S.PAMPANA"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="avatar-fallback" aria-hidden="true">
                SV
              </span>
            </div>
          </div>

          <div className="hero-copy">
            <h1 className="section-title">Building clean, responsive web experiences.</h1>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Passionate about web development, CRM, cloud services and data. Currently seeking
              internship opportunities.
            </p>

            <div className="cta-row">
              <Link to="/contact" className="cta-button">
                Get in touch
              </Link>
              <Link to="/projects" className="cta-button">
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-3" style={{ marginTop: "1.25rem" }}>
        <div className="glass-card">
          <h2 className="timeline-title" style={{ marginTop: 0 }}>
            What I&apos;m focused on
          </h2>
          <p className="timeline-description">
            Clean structure, accessible UI, and modern front-end workflows. I enjoy
            turning designs into responsive, polished pages.
          </p>
          <div className="tags">
            {["React", "Vite", "CSS", "WordPress", "SQL", "Python"].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h3 className="timeline-title" style={{ marginTop: 0 }}>
            Internship-ready
          </h3>
          <p className="timeline-description" style={{ marginBottom: 0 }}>
            Available for internships and junior roles. Comfortable collaborating
            with Git and shipping features iteratively.
          </p>
        </div>

        <div className="glass-card">
          <h3 className="timeline-title" style={{ marginTop: 0 }}>
            Browse my work
          </h3>
          <p className="timeline-description" style={{ marginBottom: 0 }}>
            Explore selected projects and repositories, including UI builds,
            WordPress work, and small automation tools.
          </p>
        </div>
      </section>
    </div>
  );
}