import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Carlton Francis</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Data Analyst | Compliance Expert | Problem Solver | Ready to Transform Your Business
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-medium animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Available for Immediate Hire
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Carlton Francis. Ready for new opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}