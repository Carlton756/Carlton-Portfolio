import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink, Download } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Le Wagon",
      program: "Data Analytics Bootcamp",
      degree: "Data Analytics Certificate",
      duration: "Mar 2025 - Jun 2025",
      grade: "Diploma and Certificate",
      logo: "🎯",
      color: "from-blue-500 to-teal-500",
      highlights: [
        "12-week intensive, full-time data analytics program focused on practical, team-based learning",
        "Cleaned and queried data with SQL in BigQuery, using JOINS, subqueries and functions",
        "Applied ELT/ETL process to visualize data in Power BI/Power Query (with DAX) & Looker Studio",
        "Imported raw CSV files and datasets into Google Sheets & Excel using advanced functions",
        "Gained hands-on experience using Python for data analysis and machine learning applications",
        "Collaborated daily in teams to tackle real-world data challenges and build insightful dashboards",
        "Learned to interpret and apply business KPIs to understand key business models"
      ],
      skills: ["SQL", "Microsoft Power BI", "Python", "BigQuery", "Data Analysis", "Machine Learning", "Excel", "Google Sheets", "Looker Studio", "DAX", "Business Intelligence", "Data Visualization", "Team Collaboration", "KPI Analysis", "Dashboard Design"]
    },
    {
      institution: "Counter Fraud Professional Awards Board",
      program: "Accredited Counter Fraud Specialist",
      degree: "Professional Certification",
      duration: "Jul 2022 - Jul 2023",
      grade: "Certified",
      logo: "🛡️",
      color: "from-orange-500 to-red-500",
      highlights: [
        "Comprehensive training in counter fraud methodologies",
        "Advanced investigation techniques and procedures",
        "Legal frameworks and compliance requirements",
        "Risk assessment and fraud prevention strategies"
      ],
      skills: ["Data Analysis", "Problem Solving", "Investigation Techniques", "Risk Assessment", "Compliance", "Legal Frameworks", "Fraud Prevention", "Evidence Analysis", "Report Writing", "Case Management", "Interview Techniques", "Financial Crime"]
    }
  ];

  const certifications = [
    {
      name: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      credentialId: "XGP77hGKM9eecMgbX",
      logo: "🏢",
      description: "Completed real-world data analytics simulation project"
    },
    {
      name: "Career Boost With Power BI",
      issuer: "Exodus Experts",
      date: "Jun 2025",
      logo: "📊",
      description: "Advanced Power BI certification with focus on ETL methodology, Power Query Editor, STAR schema modeling, and DAX"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in data analytics and compliance
          </p>
        </div>

        {/* Main Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${edu.color} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{edu.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{edu.program}</h3>
                    <p className="text-lg opacity-90">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Program Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Additional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.logo}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-gray-600 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-3">{cert.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Documents</h3>
          <div className="mb-6">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download my comprehensive resume and view my official certifications to get a complete picture of my qualifications and achievements.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/CarltonFrancisResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="/DataAnalyticsDiploma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all transform hover:scale-105 shadow-lg"
            >
              <Award size={18} />
              View Diploma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}