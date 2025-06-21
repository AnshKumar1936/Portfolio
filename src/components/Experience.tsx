import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Computer Applications',
      company: 'Graphic Era Hill University',
      period: '2022 - 2025',
      description: 'Graduating with a specialization in software development. Engaged in technical projects, hackathons, and contributed to research-oriented tools using AI and full-stack technologies.',
      skills: ['Computer Applications', 'Software Engineering', 'Data Structures', 'Algorithms']
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'Oasis Infobyte',
      period: 'Oct 2023 – Nov 2023',
      description: 'Developed responsive web applications and e-commerce platforms. Collaborated with designers to implement pixel-perfect UI/UX designs and optimize performance.',
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      type: 'work',
      title: 'Visual Assistance System',
      period: 'July 2024 – Aug 2024',
      description: 'Engineered a real-time object detection solution for visually impaired users using YOLOv4 and OpenCV. Incorporated speech synthesis for auditory navigation guidance.',
      skills: ['YOLOv4', 'OpenCV', 'Text-to-Speech', 'Real-time Inference']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            My professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10">
                  <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full transition-colors duration-300"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-16 md:pl-0' : 'md:pl-8 pl-16 md:pr-0'}`}>
                  <div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 
                      shadow-md shadow-blue-300/20 dark:shadow-purple-700/20 
                      transition-all duration-500 transform 
                      hover:scale-105 
                      hover:shadow-[0_0_18px_4px_rgba(99,102,241,0.25)] 
                      dark:hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.25)] 
                      hover:ring-2 hover:ring-blue-400/25 dark:hover:ring-purple-500/25 
                      hover:brightness-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${exp.type === 'work' ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-green-600 to-teal-600'}`}>
                        {exp.type === 'work' ? (
                          <Briefcase size={24} className="text-white" />
                        ) : (
                          <GraduationCap size={24} className="text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{exp.title}</h3>
                        {exp.company && <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{exp.company}</p>}
                      </div>
                    </div>

                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-3 transition-colors duration-300">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for center alignment */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
