import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <section>
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          A little context about who I am, what I&apos;m learning, and what I like to
          build.
        </p>
      </section>

      <section className="glass-card">
        <h2 className="timeline-title" style={{ marginTop: 0 }}>
          Professional Introduction
        </h2>
        <p className="timeline-description">
          I&apos;m a Computer Science student with a strong passion for web development
          and technology. My journey in tech started with curiosity about how
          websites work, which led me to explore HTML, CSS, and JavaScript.
        </p>
        <p className="timeline-description">
          Over time, I&apos;ve expanded my skills to include WordPress development,
          database management with SQL, and automation scripting with Python.
        </p>
        <p className="timeline-description">
          Currently, I&apos;m focused on gaining practical industry experience through
          internships where I can apply my skills, learn from experienced
          professionals, and contribute to meaningful projects.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Tools I use frequently and areas I&apos;m actively growing.
        </p>

        <div className="grid-2">
          {[
            {
              title: "Web Development",
              items: [
                "HTML5 & Semantic Markup",
                "CSS3 & Responsive Design",
                "JavaScript (ES6+)",
                "DOM Manipulation",
                "Git & Version Control",
              ],
            },
            {
              title: "WordPress & CMS",
              items: [
                "WordPress Setup & Configuration",
                "Theme Customization",
                "Plugin Integration",
                "Basic PHP",
                "Content Management",
              ],
            },
            {
              title: "Database & Backend",
              items: [
                "SQL Queries & Database Design",
                "MySQL & phpMyAdmin",
                "Basic CRUD Operations",
                "Data Modeling",
                "Database Optimization",
              ],
            },
            {
              title: "Python & Automation",
              items: [
                "Python Programming",
                "Automation Scripts",
                "Data Analysis Basics",
                "File Processing",
                "Problem Solving",
              ],
            },
          ].map((group) => (
            <div key={group.title} className="glass-card">
              <h3 className="timeline-title" style={{ marginTop: 0 }}>
                {group.title}
              </h3>
              <ul style={{ margin: 0 }}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 className="section-title">Career Goals</h2>
        <p className="section-subtitle">Where I&apos;m headed next.</p>

        <div className="grid-2">
          {[
            {
              title: "Immediate Goals",
              desc: "Secure an internship position in web development, WordPress development, or data-related roles where I can gain hands-on experience working on real projects.",
            },
            {
              title: "Long-term Vision",
              desc: "Build a strong foundation in full-stack development and data engineering and grow into a versatile developer who can tackle diverse technical challenges.",
            },
            {
              title: "Learning Focus",
              desc: "Currently expanding my knowledge in modern JavaScript frameworks, RESTful APIs, and advanced database concepts, plus deployment workflows.",
            },
            {
              title: "Industry Exposure",
              desc: "Seeking opportunities to learn industry standards, agile methodologies, and team collaboration in a professional environment.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card">
              <h3 className="timeline-title" style={{ marginTop: 0 }}>
                {item.title}
              </h3>
              <p className="timeline-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <div className="glass-card">
          <h2 className="timeline-title" style={{ marginTop: 0 }}>
            Interested in working together?
          </h2>
          <p className="timeline-description">
            I&apos;m always open to discussing new opportunities and projects.
          </p>
          <Link to="/contact" className="cta-button">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}