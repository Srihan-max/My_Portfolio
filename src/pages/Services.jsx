export default function Services() {
    return (
        <div className="container">
            <section>
                <h1 className="section-title">Services</h1>
                <p className="section-subtitle">
                    What I can help with—focused, modern, and maintainable.
                </p>
            </section>

            <section className="grid-3">
                {[
                    {
                        title: "Web Development",
                        desc: "Responsive UIs, component-driven architecture, and clean code.",
                    },
                    {
                        title: "UI/UX Implementation",
                        desc: "Pixel-snug builds with consistent spacing, accessibility, and polish.",
                    },
                    {
                        title: "Consulting",
                        desc: "Code reviews, refactors, and performance/SEO quick wins.",
                    },
                ].map((item) => (
                    <div key={item.title} className="glass-card">
                        <h2 className="timeline-title" style={{ marginTop: 0 }}>
                            {item.title}
                        </h2>
                        <p className="timeline-description" style={{ marginBottom: 0 }}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}