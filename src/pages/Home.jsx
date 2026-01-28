import React from 'react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-darkTheme text-white"
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold mt-8">Hi! Welcome 👋</h2>
        <h1 className="text-6xl font-bold text-center leading-tight">frontend web developer<br />based anywhere.</h1>
        <p className="text-lg text-center max-w-2xl mt-4">I am a frontend developer with experience in multiple companies. This is a sample portfolio template.</p>
        <div className="flex gap-6 mt-8">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            contact me →
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
          >
            my resume <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
