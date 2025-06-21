import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'YouTube Summarizer',
      description: 'An AI-powered tool that generates concise summaries of YouTube videos using transcript data and OpenAI’s language models. Just paste a link to get the key points instantly.',
      image: 'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'OpenAI API', 'YouTube API', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-Time Visual Assistance',
      description: 'An assistive navigation system for the visually impaired using YOLOv4 and OpenCV. Detects objects in real-time and provides voice-based feedback for safe mobility.',
      image: 'https://images.pexels.com/photos/4101132/pexels-photo-4101132.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'YOLOv4', 'OpenCV', 'Text-to-Speech'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'React Minesweeper Game',
      description: 'A classic Minesweeper game built with React. Includes custom grid sizes, flagging, timer, and win/loss logic with a clean and responsive interface.',
      image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?cs=srgb&dl=pexels-pixabay-275033.jpg&fm=jpg',
      technologies: ['React', 'JavaScript', 'CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Study Planner',
      description: 'A personalized lesson planning app that uses LangChain and Groq API to generate structured study plans based on subjects, topics, and user goals.',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQFTHV9rohlj-A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713348807319?e=2147483647&v=beta&t=Scf0nIbMXLkk5B_B_9w0nKbcCWyLgDc3-LyKd1NaxQU',
      technologies: ['Streamlit', 'LangChain', 'Groq API', 'Python'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden 
                         shadow-md shadow-blue-300/20 dark:shadow-purple-700/20 
                         transition-all duration-500 transform 
                         hover:scale-105 
                         hover:shadow-[0_0_18px_4px_rgba(99,102,241,0.25)] 
                         dark:hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.25)] 
                         hover:ring-2 hover:ring-blue-400/25 dark:hover:ring-purple-500/25 
                         hover:brightness-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <Github size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
