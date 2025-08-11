import React from 'react';
import { Target, Award, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Transition",
      description: "Successfully transitioned from 9+ years in compliance and investigations to data analytics"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Expertise",
      description: "Led high-profile investigations and multi-agency collaborations with measurable results"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "360+ hours of intensive data analytics training at Le Wagon bootcamp"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Specialist",
      description: "Expert in sanctions law, anti-money laundering, and regulatory compliance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Carlton Francis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated professional combining investigative expertise with cutting-edge data analytics skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a dedicated and adaptable professional with over <strong>16 years of experience</strong> 
                spanning engineering, government, and national standards development, plus <strong>7 years 
                of experience</strong> in civil and criminal investigation within the employment and tax sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With proven expertise in management, regulatory compliance, and digital forensics, I have 
                a strong ability to lead complex investigations and multi-agency collaborations. I am 
                disciplined and self-motivated, consistently achieving high standards both independently 
                and within teams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Believing firmly in self-development, I have a passion for learning new things. I recently 
                embarked on changing my career trajectory by completing <strong>Le Wagon's Data Analytics 
                Bootcamp</strong>, where I underwent over <strong>360 hours of training</strong> in SQL, 
                Python, BigQuery, Power BI, and Looker Studio.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Goal</h3>
              <p className="text-gray-700">
                I am seeking new opportunities where I can employ my newly acquired skills in Data Analytics 
                to assist businesses in finding solutions to problems they encounter, while leveraging my 
                extensive background in compliance and investigations.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unique Value Proposition</h3>
              <p className="text-gray-700">
                <strong>The Perfect Bridge:</strong> I uniquely combine deep regulatory compliance expertise 
                with cutting-edge data analytics skills. This rare combination allows me to not only analyze 
                data but also ensure it meets the highest standards of regulatory compliance and risk management.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Analytics', 'Regulatory Compliance', 'Digital Forensics', 
              'Multi-Agency Collaboration', 'Team Leadership', 'Problem Solving',
              'Communication', 'Organization Skills', 'Strategic Thinking'
            ].map((strength, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium text-sm hover:from-blue-700 hover:to-teal-700 transition-all cursor-default"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}