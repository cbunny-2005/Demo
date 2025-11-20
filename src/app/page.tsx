'use client';

import { useState } from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3,
  SiMysql, SiMongodb, SiGit, SiDocker, SiJenkins, SiFlask, SiDjango,
  SiSpringboot, SiAmazon, SiLinux, SiC, SiOpenjdk
} from 'react-icons/si';
import { FaChartBar, FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const [isDark, setIsDark] = useState(false); // Start with light mode

  return (
    <div className={`min-h-screen ${isDark ? 'bg-void-grey' : 'bg-white'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-4 rounded-full ${isDark
            ? 'bg-gradient-to-r from-hacker-green to-cyber-aqua text-terminal-black shadow-neon-green'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
          } hover:scale-110 transition-all duration-300`}
        aria-label="Toggle theme"
      >
        {isDark ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
      </button>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'cyber-grid' : ''}`}>
        {/* Animated Background */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-midnight-blue via-void-grey to-deep-navy opacity-90' : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100'}`} />
        {isDark && (
          <>
            <div className="absolute top-20 left-20 w-96 h-96 bg-hacker-green/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-aqua/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        )}

        <div className="max-w-4xl text-center z-10 px-6">
          <h1 className={`text-6xl md:text-8xl font-bold mb-4 ${isDark ? 'glow-text' : ''}`}>
            <span className={isDark
              ? 'bg-gradient-to-r from-hacker-green via-cyber-aqua to-neon-violet bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            }>
              Sathvik Chekkali
            </span>
          </h1>
          <p className={`text-2xl md:text-3xl mb-6 font-semibold ${isDark ? 'text-cyber-aqua' : 'text-gray-800'}`}>
            &lt; B.Tech Computer Science Graduate /&gt;
          </p>
          <p className={`text-lg mb-8 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-neon-mint' : 'text-gray-700'}`}>
            {isDark ? 'Hacking reality with Python, ML, and backend wizardry. Transforming data into solutions.' : 'Passionate about Python, Machine Learning, and Backend Development. Building innovative solutions with clean code.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-6">
            <a
              href="#projects"
              className={isDark
                ? 'px-8 py-4 bg-gradient-to-r from-hacker-green to-matrix-green text-terminal-black rounded-lg font-bold hover:shadow-neon-green transition-all transform hover:scale-105'
                : 'px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105'
              }
            >
              {isDark ? '[VIEW_PROJECTS]' : 'View Projects'}
            </a>
            <a
              href="#contact"
              className={isDark
                ? 'px-8 py-4 bg-transparent border-2 border-cyber-aqua text-cyber-aqua rounded-lg font-bold hover:bg-cyber-aqua/10 hover:shadow-neon-cyan transition-all'
                : 'px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-all shadow-md'
              }
            >
              {isDark ? '[CONTACT_ME]' : 'Contact Me'}
            </a>
          </div>
          <div className={`flex gap-6 justify-center ${isDark ? 'text-neon-mint' : 'text-gray-700'}`}>
            <span className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="font-mono">Hyderabad, Telangana</span>
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 relative ${isDark ? 'bg-gradient-to-b from-void-grey to-cyber-graphite' : 'bg-gradient-to-b from-white to-blue-50'}`}>
        <div className={`absolute inset-0 ${isDark ? 'cyber-grid opacity-20' : ''}`} />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-12 ${isDark ? 'glow-text' : ''}`}>
            <span className={isDark
              ? 'bg-gradient-to-r from-cyber-aqua to-terminal-purple bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }>
              {isDark ? '> ABOUT_ME' : 'About Me'}
            </span>
          </h2>
          <div className={`text-lg leading-relaxed space-y-4 mb-12 ${isDark ? 'text-neon-mint font-mono' : 'text-gray-700'}`}>
            <p className={isDark ? 'border-l-4 border-hacker-green pl-4' : 'border-l-4 border-blue-500 pl-4'}>
              {isDark && <span className="text-hacker-green">$ </span>}
              I am a B.Tech Computer Science Graduate from KMIT, Hyderabad,
              with hands-on experience in Python-based data science, machine learning, and back-end development.
            </p>
            <p className={isDark ? 'border-l-4 border-cyber-aqua pl-4' : 'border-l-4 border-purple-500 pl-4'}>
              {isDark && <span className="text-cyber-aqua">$ </span>}
              I have led projects that transformed real-world data into solutions,
              improved system performance, and simplified functionality. {isDark ? 'Ready to hack the future.' : 'Eager to contribute fresh ideas and grow through dynamic opportunities.'}
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-electric-orange glow-text' : 'text-purple-700'}`}>
              {isDark ? '// EDUCATION' : 'Education'}
            </h3>
            <div className="space-y-4">
              <div className={isDark
                ? 'bg-gradient-to-r from-midnight-blue to-deep-navy p-6 rounded-xl border-2 border-hologram-blue shadow-neon-cyan hover:shadow-glow-strong transition-all'
                : 'bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-all'
              }>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                  <div>
                    <h4 className={`text-xl font-bold ${isDark ? 'text-cyber-aqua' : 'text-gray-800'}`}>B.Tech in Computer Science and Engineering</h4>
                    <p className={isDark ? 'text-neon-mint font-mono' : 'text-gray-600'}>Keshav Memorial Institute of Technology, Hyderabad</p>
                  </div>
                  <span className={`font-bold text-lg ${isDark ? 'text-hacker-green glow-text' : 'text-blue-600'}`}>CGPA: 7.8</span>
                </div>
                <p className={isDark ? 'text-arctic-blue font-mono' : 'text-gray-500'}>Expected: 07/2025</p>
              </div>

              <div className={isDark
                ? 'bg-gradient-to-r from-midnight-blue to-deep-navy p-6 rounded-xl border-2 border-neon-mint shadow-neon-green hover:shadow-glow-strong transition-all'
                : 'bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500 shadow-md hover:shadow-lg transition-all'
              }>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                  <div>
                    <h4 className={`text-xl font-bold ${isDark ? 'text-neon-mint' : 'text-gray-800'}`}>Intermediate Education</h4>
                    <p className={isDark ? 'text-cyber-aqua font-mono' : 'text-gray-600'}>Vishra Junior Kalasala, Hyderabad</p>
                  </div>
                  <span className={`font-bold text-lg ${isDark ? 'text-hacker-green glow-text' : 'text-green-600'}`}>CGPA: 9.13</span>
                </div>
                <p className={isDark ? 'text-arctic-blue font-mono' : 'text-gray-500'}>Completed: 05/2020</p>
              </div>

              <div className={isDark
                ? 'bg-gradient-to-r from-midnight-blue to-deep-navy p-6 rounded-xl border-2 border-electric-orange shadow-neon-pink hover:shadow-glow-strong transition-all'
                : 'bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-md hover:shadow-lg transition-all'
              }>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                  <div>
                    <h4 className={`text-xl font-bold ${isDark ? 'text-electric-orange' : 'text-gray-800'}`}>Class X</h4>
                    <p className={isDark ? 'text-amber-pulse font-mono' : 'text-gray-600'}>Vignan Prabodhananda Prashanti Niketan [CBSE], Ghatkesar</p>
                  </div>
                  <span className={`font-bold text-lg ${isDark ? 'text-hacker-green glow-text' : 'text-orange-600'}`}>CGPA: 8.26</span>
                </div>
                <p className={isDark ? 'text-arctic-blue font-mono' : 'text-gray-500'}>Completed: 05/2018</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-neon-violet glow-text' : 'text-purple-700'}`}>
              {isDark ? '// TECHNICAL_SKILLS' : 'Technical Skills'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-bold text-lg mb-3 ${isDark ? 'text-hacker-green' : 'text-blue-700'}`}>
                  {isDark ? '[ Languages ]' : 'Languages'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className={isDark
                    ? 'px-4 py-2 bg-gradient-to-r from-hacker-green to-matrix-green text-terminal-black rounded-lg font-bold shadow-neon-green hover:shadow-glow-strong transition-all flex items-center gap-2'
                    : 'px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                  }>
                    <SiPython className="text-xl" />
                    Python
                  </span>
                  <span className={isDark
                    ? 'px-4 py-2 bg-gradient-to-r from-hacker-green to-matrix-green text-terminal-black rounded-lg font-bold shadow-neon-green hover:shadow-glow-strong transition-all flex items-center gap-2'
                    : 'px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                  }>
                    <SiOpenjdk className="text-xl" />
                    Java (OOPs)
                  </span>
                  <span className={isDark
                    ? 'px-4 py-2 bg-gradient-to-r from-hacker-green to-matrix-green text-terminal-black rounded-lg font-bold shadow-neon-green hover:shadow-glow-strong transition-all flex items-center gap-2'
                    : 'px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                  }>
                    <SiC className="text-xl" />
                    C
                  </span>
                </div>
              </div>

              <div>
                <h4 className={`font-bold text-lg mb-3 ${isDark ? 'text-cyber-aqua' : 'text-green-700'}`}>
                  {isDark ? '[ Web Technologies ]' : 'Web Technologies'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React'].map((tech, idx) => {
                    const icons = [SiHtml5, SiCss3, SiJavascript, SiReact];
                    const Icon = icons[idx];
                    return (
                      <span key={tech} className={isDark
                        ? 'px-4 py-2 bg-gradient-to-r from-cyber-aqua to-hologram-blue text-terminal-black rounded-lg font-bold shadow-neon-cyan hover:shadow-glow-strong transition-all flex items-center gap-2'
                        : 'px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                      }>
                        <Icon className="text-xl" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className={`font-bold text-lg mb-3 ${isDark ? 'text-terminal-purple' : 'text-purple-700'}`}>
                  {isDark ? '[ Databases ]' : 'Databases'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[{ name: 'MySQL', icon: SiMysql }, { name: 'MongoDB', icon: SiMongodb }].map(({ name, icon: Icon }) => (
                    <span key={name} className={isDark
                      ? 'px-4 py-2 bg-gradient-to-r from-terminal-purple to-neon-violet text-white rounded-lg font-bold shadow-neon-purple hover:shadow-glow-strong transition-all flex items-center gap-2'
                      : 'px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                    }>
                      <Icon className="text-xl" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-bold text-lg mb-3 ${isDark ? 'text-electric-orange' : 'text-orange-700'}`}>
                  {isDark ? '[ Tools & Frameworks ]' : 'Tools & Frameworks'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Git', icon: SiGit },
                    { name: 'Docker', icon: SiDocker },
                    { name: 'Jenkins', icon: SiJenkins },
                    { name: 'Power BI', icon: FaChartBar },
                    { name: 'Flask', icon: SiFlask },
                    { name: 'Django', icon: SiDjango },
                    { name: 'Spring Boot', icon: SiSpringboot }
                  ].map(({ name, icon: Icon }) => (
                    <span key={name} className={isDark
                      ? 'px-4 py-2 bg-gradient-to-r from-electric-orange to-cyber-red text-white rounded-lg font-bold shadow-neon-pink hover:shadow-glow-strong transition-all flex items-center gap-2'
                      : 'px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                    }>
                      <Icon className="text-xl" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-bold text-lg mb-3 ${isDark ? 'text-arctic-blue' : 'text-indigo-700'}`}>
                  {isDark ? '[ Cloud & DevOps ]' : 'Cloud & DevOps'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[{ name: 'AWS (EC2, S3)', icon: SiAmazon }, { name: 'Linux', icon: SiLinux }].map(({ name, icon: Icon }) => (
                    <span key={name} className={isDark
                      ? 'px-4 py-2 bg-gradient-to-r from-arctic-blue to-deep-teal text-terminal-black rounded-lg font-bold shadow-neon-cyan hover:shadow-glow-strong transition-all flex items-center gap-2'
                      : 'px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2'
                    }>
                      <Icon className="text-xl" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-bold text-lg mb-3 ${isDark ? 'text-neon-pink' : 'text-pink-700'}`}>
                  {isDark ? '[ Soft Skills ]' : 'Soft Skills'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Quick Learner", "Team Player", "Good Communicator", "Responsible"].map(skill => (
                    <span key={skill} className={isDark
                      ? 'px-4 py-2 bg-gradient-to-r from-neon-pink to-plasma-fuchsia text-white rounded-lg font-bold shadow-neon-pink hover:shadow-glow-strong transition-all'
                      : 'px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all'
                    }>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 relative ${isDark ? 'bg-gradient-to-b from-cyber-graphite to-midnight-blue' : 'bg-gradient-to-b from-purple-50 to-pink-50'}`}>
        <div className={`absolute inset-0 ${isDark ? 'cyber-grid opacity-10' : ''}`} />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-16 ${isDark ? 'glow-text' : ''}`}>
            <span className={isDark
              ? 'bg-gradient-to-r from-neon-pink to-ion-purple bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }>
              {isDark ? '> PROJECTS_DEPLOYED' : 'Projects'}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WeatherSphere */}
            <div className={isDark
              ? 'bg-gradient-to-br from-midnight-blue to-deep-navy rounded-xl border-2 border-cyber-aqua shadow-neon-cyan hover:shadow-glow-strong transition-all p-8'
              : 'bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border-t-4 border-cyan-500'
            }>
              <div className={`h-48 rounded-lg mb-6 flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-cyber-aqua via-hologram-blue to-terminal-purple shadow-neon-cyan' : 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600'}`}>
                <span className="text-6xl">🌤️</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-cyber-aqua glow-text' : 'text-gray-800'}`}>WeatherSphere</h3>
                <a
                  href="https://github.com/sathvik1607/WeatherSphereApp.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? 'text-hacker-green hover:text-neon-lime transition' : 'text-cyan-600 hover:text-cyan-700 transition'}
                  aria-label="View WeatherSphere on GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-hacker-green font-mono' : 'text-cyan-600'}`}>Role: Python Developer</p>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-neon-mint font-mono' : 'text-gray-600 text-sm'}`}>
                Mobile app with real-time weather forecasts using ML. LSTM model with 5–10% accuracy boost.
              </p>
              <div className="mb-4">
                <h4 className={`font-semibold text-sm mb-2 ${isDark ? 'text-electric-orange' : 'text-gray-700'}`}>{isDark ? '// Achievements:' : 'Key Achievements:'}</h4>
                <ul className={`text-sm space-y-1 list-disc list-inside ${isDark ? 'text-arctic-blue font-mono' : 'text-gray-600'}`}>
                  <li>Visual Crossing API integration</li>
                  <li>LSTM model: 5-10% improvement</li>
                  <li>Real-time alert system</li>
                </ul>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["React Native", "Expo", "Flask", "Python", "TensorFlow", "scikit-learn"].map(tag => (
                  <span key={tag} className={isDark
                    ? 'px-3 py-1 bg-gradient-to-r from-cyber-aqua to-hologram-blue text-terminal-black rounded-full text-xs font-bold'
                    : 'px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-medium shadow'
                  }>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* SmartEx */}
            <div className={isDark
              ? 'bg-gradient-to-br from-midnight-blue to-deep-navy rounded-xl border-2 border-neon-pink shadow-neon-pink hover:shadow-glow-strong transition-all p-8'
              : 'bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border-t-4 border-purple-500'
            }>
              <div className={`h-48 rounded-lg mb-6 flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-neon-pink via-ion-purple to-terminal-purple shadow-neon-pink' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'}`}>
                <span className="text-6xl">🤖</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-neon-pink glow-text' : 'text-gray-800'}`}>SmartEx – AI Exam System</h3>
                <a
                  href="https://github.com/sathvik1607/SmartEx.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? 'text-hacker-green hover:text-neon-lime transition' : 'text-purple-600 hover:text-purple-700 transition'}
                  aria-label="View SmartEx on GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-neon-violet font-mono' : 'text-purple-600'}`}>Role: Backend Developer</p>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-neon-mint font-mono' : 'text-gray-600 text-sm'}`}>
                AI-driven platform for auto question generation and evaluation using GPT.
              </p>
              <div className="mb-4">
                <h4 className={`font-semibold text-sm mb-2 ${isDark ? 'text-electric-orange' : 'text-gray-700'}`}>{isDark ? '// Achievements:' : 'Key Achievements:'}</h4>
                <ul className={`text-sm space-y-1 list-disc list-inside ${isDark ? 'text-arctic-blue font-mono' : 'text-gray-600'}`}>
                  <li>Question gen: &lt;1.2s</li>
                  <li>Grading latency: &lt;2.5s</li>
                  <li>Real-time dashboard</li>
                </ul>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["TypeScript", "Vite.js", "Python", "Flask", "OpenAI API"].map(tag => (
                  <span key={tag} className={isDark
                    ? 'px-3 py-1 bg-gradient-to-r from-neon-pink to-ion-purple text-white rounded-full text-xs font-bold'
                    : 'px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium shadow'
                  }>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`mt-12 rounded-xl p-8 ${isDark ? 'bg-gradient-to-r from-midnight-blue to-deep-navy border-2 border-laser-yellow shadow-neon-green' : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 shadow-xl'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-laser-yellow glow-text' : 'text-gray-800'}`}>
              {isDark ? '// CERTIFICATIONS' : 'Certifications'}
            </h3>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className={`font-bold text-lg ${isDark ? 'text-amber-pulse' : 'text-gray-800'}`}>NPTEL – Python for Data Science</h4>
                <p className={isDark ? 'text-neon-mint font-mono' : 'text-gray-600'}>Completed: 2022</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1XZodh8crgq8KqFIELuvEqddre0Cq1MaI/view"
                target="_blank"
                rel="noopener noreferrer"
                className={isDark
                  ? 'px-6 py-3 bg-gradient-to-r from-laser-yellow to-amber-pulse text-terminal-black rounded-lg font-bold hover:shadow-glow-strong transition-all'
                  : 'px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all'
                }
              >
                {isDark ? '[VIEW_CERT]' : 'View Certificate'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 relative ${isDark ? 'bg-gradient-to-b from-midnight-blue to-void-grey' : 'bg-gradient-to-b from-blue-50 to-purple-50'}`}>
        <div className={`absolute inset-0 ${isDark ? 'cyber-grid opacity-20' : ''}`} />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-8 ${isDark ? 'glow-text' : ''}`}>
            <span className={isDark
              ? 'bg-gradient-to-r from-hacker-green to-cyber-aqua bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }>
              {isDark ? '> INITIATE_CONTACT' : 'Get In Touch'}
            </span>
          </h2>
          <p className={`text-center mb-12 text-lg ${isDark ? 'text-neon-mint font-mono' : 'text-gray-700'}`}>
            {isDark ? 'Ready to hack the future together? Drop a message.' : "Let's connect! Feel free to reach out for collaborations or just a friendly chat."}
          </p>

          <form className={isDark
            ? 'bg-gradient-to-br from-cyber-graphite to-midnight-blue rounded-xl border-2 border-cyber-aqua shadow-neon-cyan p-8 space-y-6'
            : 'bg-white rounded-xl shadow-lg p-8 space-y-6 border-t-4 border-purple-500'
          }>
            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-hacker-green font-mono' : 'text-gray-700'}`}>
                {isDark ? '[ NAME ]' : 'Name'}
              </label>
              <input
                type="text"
                className={isDark
                  ? 'w-full px-4 py-3 bg-terminal-black border-2 border-neon-mint text-cyber-aqua rounded-lg focus:ring-2 focus:ring-hacker-green focus:border-hacker-green outline-none transition-all font-mono'
                  : 'w-full px-4 py-3 border-2 border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all'
                }
                placeholder={isDark ? 'Enter your name...' : 'Your Name'}
              />
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-hacker-green font-mono' : 'text-gray-700'}`}>
                {isDark ? '[ EMAIL ]' : 'Email'}
              </label>
              <input
                type="email"
                className={isDark
                  ? 'w-full px-4 py-3 bg-terminal-black border-2 border-neon-mint text-cyber-aqua rounded-lg focus:ring-2 focus:ring-hacker-green focus:border-hacker-green outline-none transition-all font-mono'
                  : 'w-full px-4 py-3 border-2 border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all'
                }
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-hacker-green font-mono' : 'text-gray-700'}`}>
                {isDark ? '[ MESSAGE ]' : 'Message'}
              </label>
              <textarea
                rows={5}
                className={isDark
                  ? 'w-full px-4 py-3 bg-terminal-black border-2 border-neon-mint text-cyber-aqua rounded-lg focus:ring-2 focus:ring-hacker-green focus:border-hacker-green outline-none resize-none transition-all font-mono'
                  : 'w-full px-4 py-3 border-2 border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none transition-all'
                }
                placeholder="Tell me about your project..."
              />
            </div>

            <button className={isDark
              ? 'w-full py-4 bg-gradient-to-r from-hacker-green to-matrix-green text-terminal-black rounded-lg font-bold hover:shadow-glow-strong transition-all transform hover:scale-105'
              : 'w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105'
            }>
              {isDark ? '[SEND_MESSAGE]' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 text-center space-y-3">
            <p className={isDark ? 'text-neon-mint font-mono' : 'text-gray-700'}>
              <span className={`font-bold ${isDark ? 'text-hacker-green' : 'text-purple-600'}`}>{isDark ? 'EMAIL:' : 'Email:'}</span>{" "}
              <a href="mailto:sathvikchekkali123@gmail.com" className={`${isDark ? 'text-cyber-aqua hover:text-hacker-green glow-text' : 'text-purple-600 hover:underline'} transition`}>
                sathvikchekkali123@gmail.com
              </a>
            </p>
            <p className={isDark ? 'text-neon-mint font-mono' : 'text-gray-700'}>
              <span className={`font-bold ${isDark ? 'text-hacker-green' : 'text-purple-600'}`}>{isDark ? 'PHONE:' : 'Phone:'}</span>{" "}
              <a href="tel:+918520925186" className={`${isDark ? 'text-cyber-aqua hover:text-hacker-green glow-text' : 'text-purple-600 hover:underline'} transition`}>
                +91 8520925186
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/sathvik-chekkali/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? 'text-cyber-aqua hover:text-hacker-green glow-border' : 'text-gray-600 hover:text-blue-600'} transition transform hover:scale-110 p-2 rounded-lg`}
              aria-label="LinkedIn"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/sathvik1607"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? 'text-cyber-aqua hover:text-hacker-green glow-border' : 'text-gray-600 hover:text-purple-600'} transition transform hover:scale-110 p-2 rounded-lg`}
              aria-label="GitHub"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${isDark ? 'bg-terminal-black border-t-2 border-hacker-green' : 'bg-gradient-to-r from-gray-900 to-gray-800'}`}>
        <p className={`font-bold ${isDark ? 'text-cyber-aqua font-mono glow-text' : 'text-white'}`}>
          © 2025 Sathvik Chekkali {isDark ? '| All rights reserved' : '• All rights reserved'}
        </p>
        <p className={`text-sm mt-2 ${isDark ? 'text-neon-mint font-mono' : 'text-gray-300'}`}>
          {isDark ? '< Hacking reality with code, music, and games /> 🎮🎵🎬' : 'Passionate about movies, music, games, and exploring new technologies 🎮🎵🎬'}
        </p>
      </footer>
    </div>
  );
}
