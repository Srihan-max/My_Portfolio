export default function Work() {
    return (
        <div className="container">
            <section>
                <h1 className="section-title">Work</h1>
                <p className="section-subtitle">
                    A few highlights—swap these for real case studies.
                </p>
            </section>

            <section className="grid-3">
                {[
                    {
                        title: "Portfolio Website",
                        desc: "Multi-page React + Vite build with clean layout and navigation.",
                    },
                    {
                        title: "E-commerce UI",
                        desc: "Product grids, filters, and checkout flows with a responsive design.",
                    },
                    {
                        title: "Dashboard App",
                        desc: "Data-driven views with reusable components and consistent spacing.",
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