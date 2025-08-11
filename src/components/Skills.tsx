import React from 'react';
import { Database, Code, BarChart3, Shield, Users, Search, FileSpreadsheet, BrainCircuit, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics & Visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "SQL & BigQuery", level: 90 },
        { name: "Python", level: 85 },
        { name: "Power BI & DAX", level: 90 },
        { name: "Looker Studio", level: 85 },
        { name: "Excel & Google Sheets", level: 95 }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "Data Warehousing", level: 80 },
        { name: "ETL/ELT Processes", level: 85 },
        { name: "Statistical Analysis", level: 80 },
        { name: "Machine Learning Basics", level: 75 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Compliance & Investigation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "Regulatory Compliance", level: 95 },
        { name: "Digital Forensics", level: 90 },
        { name: "Anti-Money Laundering", level: 90 },
        { name: "Sanctions Law", level: 95 },
        { name: "Risk Assessment", level: 90 }
      ]
    },
    {
      title: "Business & Soft Skills",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 95 },
        { name: "Strategic Thinking", level: 90 }
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: <Code className="w-6 h-6" /> },
    { name: "SQL", icon: <Database className="w-6 h-6" /> },
    { name: "Power BI", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "BigQuery", icon: <Database className="w-6 h-6" /> },
    { name: "Excel", icon: <FileSpreadsheet className="w-6 h-6" /> },
    { name: "Looker Studio", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Plotly", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Google Colab", icon: <BrainCircuit className="w-6 h-6" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set combining technical data analytics capabilities with extensive compliance and investigation experience
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-100 flex items-center gap-3"
              >
                <div className="text-blue-600">
                  {tool.icon}
                </div>
                <span className="font-medium text-gray-800">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              Le Wagon Data Analytics Bootcamp Graduate
            </div>
            <div className="text-sm mt-1 opacity-90">360+ Hours of Intensive Training</div>
          </div>
        </div>

        {/* Skills Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why I Stand Out</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-200">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Unique Background</h4>
              <p className="text-gray-600 text-sm">Rare combination of compliance expertise and data analytics skills</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-teal-200">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600 text-sm">Led high-profile investigations with measurable outcomes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-orange-200">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Ready to Impact</h4>
              <p className="text-gray-600 text-sm">Available immediately with fresh perspective and energy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}