import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Palette size={24} />,
      title: 'Java/Python Programmer',
      description: 'Building efficient, scalable backend systems and automating intelligent workflows with clean, maintainable code.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: <Heart size={24} />,
      title: 'Passionate',
      description: 'Dedicated to continuous learning and improvement'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Software Developer & Tech Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              As a Computer Science undergraduate with a passion for building intelligent and user-friendly applications, I focus on merging innovation with practicality. Whether it's designing an AI-powered study planner, detecting real-time emotions for video recommendations, or creating assistive tools using YOLOv4, my goal is to make technology more meaningful and accessible.
            </p>
            {/* <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              I believe in the power of clean code, thoughtful design, and continuous 
              learning. When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the developer community.
            </p> */}
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-colors duration-300">
                React JS
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium transition-colors duration-300">
                Java Programmer
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium transition-colors duration-300">
                Python Programmer
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;