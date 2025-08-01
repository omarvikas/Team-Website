import React from 'react';
import { Lightbulb, FileText, Video, Download, TrendingUp, Users, BarChart } from 'lucide-react';

const Innovations = () => {
  const innovations = [
    {
      title: 'Motivational Nudges System',
      description: 'Personalized encouragement messages and rewards system to boost student engagement.',
      icon: TrendingUp,
      attachments: ['Student Engagement Report.pdf', 'Nudge Templates.docx']
    },
    {
      title: 'Customized Reporting Formats',
      description: 'Tailored reports for different stakeholders including teachers, principals, and government officials.',
      icon: BarChart,
      attachments: ['Report Templates.pdf', 'Dashboard Guide.pdf']
    },
    {
      title: 'Smart Tracking Mechanisms',
      description: 'Real-time monitoring of student progress and teacher effectiveness using advanced analytics.',
      icon: Users,
      attachments: ['Tracking Demo.mp4', 'Implementation Guide.pdf']
    }
  ];

  const practices = [
    'Interactive classroom aids for visual learning',
    'Gamified assessment modules',
    'Parent engagement mobile app',
    'Teacher professional development portal',
    'Student progress visualization tools'
  ];

  return (
    <section id="innovations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovations & Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team constantly innovates to improve learning outcomes through creative solutions 
            and best practices tailored for the Telangana context.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Innovations */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
              Key Innovations
            </h3>
            
            <div className="space-y-6">
              {innovations.map((innovation, index) => {
                const IconComponent = innovation.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {innovation.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{innovation.description}</p>
                        
                        <div className="space-y-2">
                          {innovation.attachments.map((attachment, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              {attachment.endsWith('.pdf') ? (
                                <FileText className="w-4 h-4 text-red-500" />
                              ) : attachment.endsWith('.mp4') ? (
                                <Video className="w-4 h-4 text-purple-500" />
                              ) : (
                                <FileText className="w-4 h-4 text-blue-500" />
                              )}
                              <span className="text-gray-700">{attachment}</span>
                              <Download className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Best Practices */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Best Practices Implemented
            </h3>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <ul className="space-y-4">
                {practices.map((practice, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Want to learn more?</h4>
                <p className="text-blue-700 text-sm mb-4">
                  Access detailed documentation and implementation guides for all our innovations.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations;