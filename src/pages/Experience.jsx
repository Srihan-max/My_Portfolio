export default function Experience() {
  const projects = [
    {
      title: "SUROVERS-Cars",
      desc:
        "A polished car-themed showcase built to explore responsive layouts, fluid typography, and component-based styling. Focuses on accessible UI patterns, clean structure, and mobile-first design for a sleek browsing experience.",
      tags: ["CSS", "HTML"],
      href: "https://github.com/Srihan-max/SUROVERS-Cars",
    },
    {
      title: "framework-backend-exam",
      desc:
        "A backend exam project showcasing server-rendered pages with Blade and PHP. Highlights clean routing, reusable templates, and data-driven views—designed to demonstrate clarity, maintainability, and practical web backend patterns.",
      tags: ["Blade", "PHP"],
      href: "https://github.com/Srihan-max/framework-backend-exam",
    },
    {
      title: "PAMPANA-Srihan",
      desc:
        "A systems programming and tooling exploration featuring C utilities, Roff documentation, and Shell scripts. Emphasizes low-level problem solving, build pipelines, and well-documented command-line workflows.",
      tags: ["C", "Roff", "HTML", "Shell"],
      href: "https://github.com/b1-24-25-g2/PAMPANA-Srihan",
    },
    {
      title: "My-project",
      desc:
        "A frontend sandbox for semantic HTML and modern CSS techniques. Focuses on accessible components, consistent spacing systems, and responsive layouts to refine visual polish and UX fundamentals.",
      tags: ["HTML", "CSS"],
      href: "https://github.com/Srihan-max/My-project",
    },
    {
      title: "Js-Spot-The-Square",
      desc:
        "A fast-paced browser mini-game where you race to spot the target square under time pressure. Built to practice DOM manipulation, event handling, and simple state management—all wrapped in playful visual feedback.",
      tags: ["JavaScript", "HTML", "CSS"],
      href: "https://github.com/Srihan-max/Js-Spot-The-Square",
    },
    {
      title: "Le_velo_vert",
      desc:
        "A bike-themed web app blending server-side Ruby with accessible frontend design. Prioritizes clean templates, sensible routing, and performance-minded styles for a smooth reading and browsing experience.",
      tags: ["HTML", "Ruby", "CSS", "Batchfile"],
      href: "https://github.com/Srihan-max/Le_velo_vert",
    },
    {
      title: "mistral-chat-app",
      desc:
        "A modern chat UI prototype built with TypeScript and expressive CSS. Focuses on strongly-typed components, message rendering, and themeable styles to deliver snappy interactions and clean architecture.",
      tags: ["TypeScript", "CSS", "JavaScript"],
      href: "https://github.com/Srihan-max/mistral-chat-app",
    },
    {
      title: "Srihan-max",
      desc:
        "A lightweight personal site repository for quick iteration and content updates. Focuses on fast loads, responsive layouts, and a simple structure that serves as a hub for portfolio and experiments.",
      tags: ["HTML", "CSS"],
      href: "https://github.com/Srihan-max/Srihan-max",
    },
    {
      title: "2nd-year-Git",
      desc:
        "A collection of coursework and Git-based exercises from second year. Explores branching strategies, collaborative workflows, and small web tasks that build a solid foundation for team development.",
      tags: ["Git", "HTML", "CSS", "JavaScript"],
      href: "https://github.com/Srihan-max/2nd-year-Git",
    },
    {
      title: "Backend-IPI",
      desc:
        "Backend coursework showcasing Blade-powered templates and PHP data handling. Emphasizes form flows, validation, and reusable partials to keep server-rendered pages clear, consistent, and easy to extend.",
      tags: ["Blade", "PHP"],
      href: "https://github.com/Srihan-max/Backend-IPI",
    },
    {
      title: "html-course",
      desc:
        "A hands-on set of HTML exercises focused on semantics and accessibility. Covers layout patterns, content structure, and CSS refinements to build pages that are readable, robust, and user-friendly.",
      tags: ["HTML", "CSS"],
      href: "https://github.com/Srihan-max/html-course",
    },
    {
      title: "My_Portfolio",
      desc:
        "An interactive portfolio with sections for projects, skills, and contact. Uses vanilla JavaScript to add progressive enhancements and emphasizes performance, clarity, and an inviting, human-centered UX.",
      tags: ["HTML", "JavaScript", "CSS"],
      href: "https://github.com/Srihan-max/My_Portfolio",
    },
    {
      title: "index",
      desc:
        "A minimal landing page used as a quick prototype scaffold. Provides baseline semantics, mobile-ready styles, and a clean structure that’s easy to extend as ideas evolve.",
      tags: ["HTML"],
      href: "https://github.com/Srihan-max/index",
    },
  ];

  return (
    <div className="container">
      <section>
        <h1 className="section-title">Experience</h1>
        <p className="section-subtitle">
          A curated collection of my repositories with engaging, human-friendly
          descriptions and the core technologies behind each one.
        </p>
      </section>

      <section>
        <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)" }}>
          GitHub Projects
        </h2>
      </section>

      <section className="grid-2">
        {projects.map((project) => (
          <article key={project.title} className="glass-card">
            <h3 className="timeline-title" style={{ marginTop: 0 }}>
              {project.title}
            </h3>
            <p className="timeline-description">{project.desc}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              className="cta-button"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
