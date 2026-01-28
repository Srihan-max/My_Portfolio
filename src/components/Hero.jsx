export default function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="logo">yourname<span>.</span></div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <button className="nav-btn">Contact →</button>
      </nav>

      {/* Two-column hero layout for more spacing and a photo slot */}
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="intro">Hi! I'm Your Name 👋</p>
          <h1>frontend web developer<br />based anywhere.</h1>
          <p className="sub">
            Short bio goes here. Replace this text with your own description.
          </p>

          <div className="actions">
            <button className="primary">contact me →</button>
            <button className="secondary">my resume ↓</button>
          </div>
        </div>
        <div className="hero-photo">
          {/* Replace with your actual photo path (e.g., /assets/profile.jpg) */}
          <img src="/assets/profile.jpg" alt="Profile" className="hero-image" />
        </div>
      </div>
    </section>
  )
}
