import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ansh kumar singh
            </div>
            <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto transition-colors duration-300">
              AI & Full Stack Developer passionate about building intelligent, scalable, and user-centric digital solutions.
              Specializing in Python, React, and AI integration to solve real-world problems.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;