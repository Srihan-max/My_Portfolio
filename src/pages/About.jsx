import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '🎓',
      title: 'Education',
      description: 'Your educational background and qualifications',
    },
    {
      icon: '💼',
      title: 'Experience',
      description: 'Your professional experience and expertise',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Your approach to technology and innovation',
    },
  ];

  const skills = [
    'Skill 1',
    'Skill 2',
    'Skill 3',
    'Skill 4',
    'Skill 5',
  ];

  const hobbies = [
    { icon: '🎯', name: 'Hobby 1' },
    { icon: '🎨', name: 'Hobby 2' },
    { icon: '🎵', name: 'Hobby 3' },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-darkTheme text-white py-16">
      <h2 className="text-4xl font-bold mb-4">About</h2>
      <p className="text-lg text-center max-w-xl">This is a sample about section. Add your professional summary, skills, and experience here. No personal information is displayed.</p>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{highlight.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {highlight.title}
            </h3>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Hobbies & Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-2">{hobby.icon}</span>
              <span className="text-gray-700 font-medium">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
