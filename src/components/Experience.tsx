import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Building } from 'lucide-react';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experiences = [
    {
      company: "HM Revenue & Customs",
      position: "Compliance Officer",
      duration: "Dec 2017 - Aug 2024",
      period: "6 yrs 9 mos",
      location: "United Kingdom",
      type: "Full-time, On-site",
      logo: "🏛️",
      highlights: [
        "Enforced export control regulations, with particular focus on strategic goods, including military and dual-use items, ensuring strict adherence to Russian Sanctions Law",
        "Managed and implemented international sanctions, ensuring compliance with global regulatory frameworks and standards",
        "Led high-profile, multi-agency investigations into serious fraud schemes, often orchestrated by organized crime groups and businesses",
        "Applied advanced digital forensics, fiscal investigative methods, and Anti-Money Laundering techniques to uncover critical evidence",
        "Mentored and guided junior team members, contributing to their professional development and enhancing team performance",
        "Utilized data analytics to identify patterns of non-compliance, developing targeted compliance strategies",
        "Collaborated with internal teams to design and implement compliance solutions and training programs"
      ],
      skills: ["Data Analysis", "Team Player", "Compliance", "Digital Forensics", "Anti-Money Laundering"]
    },
    {
      company: "JN Bank UK",
      position: "Roaming Teller and Administrative Assistant",
      duration: "Sep 2015 - Dec 2017",
      period: "2 yrs 4 mos",
      location: "London Area, United Kingdom",
      type: "Full-time, On-site",
      logo: "🏦",
      highlights: [
        "Managed filing systems, ensuring efficient retrieval of documents and correspondence",
        "Coordinated meetings, training sessions, and handled holiday/rota management for staff",
        "Maintained accurate consignment logs, registers, and managed petty cash with regular analysis",
        "Assisted in staff and agent training across the UK, enhancing operational efficiency and compliance",
        "Provided relief support to branches, focusing on customer service and transaction processing",
        "Achieved assigned sales and service targets, consistently delivering high levels of customer satisfaction",
        "Ensured compliance with company guidelines, particularly in detecting counterfeit notes and managing e-money transactions"
      ],
      skills: ["Working with Minimal Supervision", "Office Administration", "Customer Service"]
    },
    {
      company: "Bureau of Standards Jamaica",
      position: "Engineer/Scientific Officer",
      duration: "Jun 2006 - Jul 2015",
      period: "9 yrs 2 mos",
      location: "Kingston, Jamaica",
      type: "Full-time, On-site",
      logo: "⚙️",
      highlights: [
        "Played a key role in developing national standards, with focus on sustainability and quality management systems (ISO 17025)",
        "Led and supervised laboratory activities, ensuring compliance with international standards",
        "Represented the organization in international conferences, staying abreast of global industry trends",
        "Mentored junior engineers, contributing to their growth and skill development"
      ],
      skills: ["Leadership", "Project Planning", "ISO Standards", "Quality Management"]
    },
    {
      company: "St. Catherine High School",
      position: "Physics Teacher",
      duration: "Sep 2002 - Jul 2006",
      period: "3 yrs 11 mos",
      location: "Saint Catherine, Jamaica",
      type: "Full-time, On-site",
      logo: "🎓",
      highlights: [
        "Planned, prepared, and delivered engaging Physics lessons to secondary students",
        "Prepared students for external secondary school examinations, focusing on progression to college or university",
        "Tailored teaching methods to meet educational needs, abilities, and achievement levels of diverse student groups",
        "Assessed and evaluated student progress through regular assignments, marking, and providing detailed feedback",
        "Fostered student well-being and academic success by offering guidance on educational and social matters",
        "Collaborated with school leadership to develop curriculum content, teaching programs, and assessment methods"
      ],
      skills: ["Educational Leadership", "Curriculum Development", "Student Assessment"]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse career spanning compliance, investigations, engineering, and education across multiple industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl">{exp.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration} • {exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {expandedItem === index ? (
                    <>
                      Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Details <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {expandedItem === index && (
                <div className="mt-6 space-y-6 border-t border-gray-200 pt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements & Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIndex) => (
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
              )}
            </div>
          ))}
        </div>

        {/* Career Progression Visual */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Career Journey</h3>
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Transformation Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Successfully transitioned from compliance to data analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Maintained expertise while acquiring new technical skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Led multi-million pound investigations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Mentored teams across multiple organizations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Education (2002-2006)
            </div>
            <div className="text-gray-400">→</div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              Engineering (2006-2015)
            </div>
            <div className="text-gray-400">→</div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              Banking (2015-2017)
            </div>
            <div className="text-gray-400">→</div>
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
              Compliance (2017-2024)
            </div>
            <div className="text-gray-400">→</div>
            <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">
              Data Analytics (2025+)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}