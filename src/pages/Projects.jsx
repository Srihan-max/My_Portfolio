export default function Projects() {
  return (
    <div className="container">
      <section>
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">A quick overview of what I like building.</p>
      </section>

      <section className="grid-3">
        {[
          {
            title: "Web Portfolio Projects",
            desc: "Responsive layouts and component-based UI builds.",
            tags: ["HTML", "CSS", "JavaScript", "React"],
          },
          {
            title: "WordPress Theme Development",
            desc: "Custom themes, clean templates, and maintainable styling.",
            tags: ["WordPress", "Themes", "Plugins"],
          },
          {
            title: "Python Automation Scripts",
            desc: "Small tools to remove repetitive work and improve workflows.",
            tags: ["Python", "Automation"],
          },
        ].map((item) => (
          <div key={item.title} className="glass-card">
            <h2 className="timeline-title" style={{ marginTop: 0 }}>
              {item.title}
            </h2>
            <p className="timeline-description">{item.desc}</p>
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}