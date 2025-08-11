import React from 'react';
import { ChevronDown, Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Open to Work Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium border border-green-200 animate-bounce">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            #OPEN_TO_WORK
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Carlton Francis</span>
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Data Analyst
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            SQL | Python | Power BI Expert | Former Compliance Officer
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Le Wagon Data Analytics Bootcamp Alumni with 9+ years of investigative experience, 
            now transforming businesses through data-driven insights and compliance expertise.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 animate-pulse">360+</div>
              <div className="text-sm uppercase tracking-wide font-semibold">Hours Training</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 animate-pulse">16+</div>
              <div className="text-sm uppercase tracking-wide font-semibold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 animate-pulse">5+</div>
              <div className="text-sm uppercase tracking-wide font-semibold">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 animate-pulse">100%</div>
              <div className="text-sm uppercase tracking-wide font-semibold">Success Rate</div>
            </div>
          </div>

          {/* Location & Availability */}
          <div className="flex flex-wrap justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>United Kingdom</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Available Immediately</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://linkedin.com/in/carlton-francis-967435314"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Carlton756"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-300 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}