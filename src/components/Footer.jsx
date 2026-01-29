export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="container footer">
            <div className="glass-card">
                <div className="grid-2">
                    <div>
                        <h2 className="timeline-title" style={{ marginTop: 0 }}>
                            Let&apos;s connect
                        </h2>
                        <p className="timeline-description" style={{ marginBottom: 0 }}>
                            <a href="mailto:Srihan.v.s@gmail.com">Srihan.v.s@gmail.com</a>
                        </p>
                    </div>

                    <div>
                        <h3 className="timeline-title" style={{ marginTop: 0 }}>
                            Links
                        </h3>
                        <div className="tags">
                            {[
                                { href: "https://github.com/srihan-max/", label: "GitHub" },
                                {
                                    href: "https://www.linkedin.com/in/srihan-pampana-80b995381/",
                                    label: "LinkedIn",
                                },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    className="tag"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="footer-meta">© {year} Srihan.V.S • All rights reserved.</p>
            </div>
        </footer>
    );
}
