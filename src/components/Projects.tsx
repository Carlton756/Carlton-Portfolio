import React from 'react';
import { ExternalLink, Github, Database, BarChart3, Users, TrendingUp } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "RDAMP LMS Analytics",
      description: "Created Rychtenshane Community Housing Group's first Learning Management System (LMS), capable of centralizing learning efforts and utilizing data-driven insights to improve staff training, compliance, and performance outcomes.",
      technologies: ["SQL", "Power BI", "Data Modeling", "Dashboard Design"],
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      githubUrl: "https://github.com/Carlton756/RDAMP_LMS_Analytics_RCHG",
      highlights: [
        "Centralized learning management system",
        "Data-driven insights for training optimization",
        "Performance tracking and compliance monitoring"
      ]
    },
    {
      title: "RDAMP Dimensional Model",
      description: "Showcases ability to build a structured, query optimized reporting system which incorporates dimensional modeling best practices. Created a usable and scalable data model suitable for enterprise-grade reporting.",
      technologies: ["Power BI", "DAX", "Data Warehousing", "Dimensional Modeling"],
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      githubUrl: "https://github.com/Carlton756/RDAMP-Dimensional-Model-Power BI",
      highlights: [
        "Enterprise-grade dimensional modeling",
        "Optimized query performance",
        "Scalable reporting architecture"
      ]
    },
    {
      title: "ACE Sales Analysis",
      description: "Comprehensive sales performance analysis for ACE, a nationwide retail chain, between 2023-2025. Task 1 of Realcare Tech Mark Data Analyst Mentorship Program, outlining key performance trends with actionable recommendations.",
      technologies: ["Python", "SQL", "Data Analysis", "Visualization"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      githubUrl: "https://github.com/Carlton756/RDAMP-Sales-Analysis",
      highlights: [
        "3-year performance trend analysis",
        "Strategic recommendations for improvement",
        "Comprehensive retail analytics"
      ]
    },
    {
      title: "Market Trend Analysis of Data Roles",
      description: "Applied Le Wagon Data Analytics Bootcamp skills to analyze US data job market trends. Used ELT approach with BigQuery SQL, Python visualizations in Google Colab, and compelling narratives in Looker Studio.",
      technologies: ["BigQuery", "Python", "Plotly", "Looker Studio"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      githubUrl: "#",
      highlights: [
        "Kaggle dataset analysis with ELT approach",
        "Advanced Python visualizations",
        "Market insights and salary trends"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world data analytics projects showcasing technical skills and business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Impact</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-sm text-blue-800">Major Projects</div>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-teal-800">On-Time Delivery</div>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-orange-800">Tech Stacks</div>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">∞</div>
                <div className="text-sm text-purple-800">Learning Mindset</div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/Carlton756"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-gray-900 hover:to-black transition-all transform hover:scale-105 shadow-lg"
          >
            <Github size={24} />
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}