import React from 'react';
import { Monitor, BarChart3, Smartphone, FileSpreadsheet, ExternalLink, Download } from 'lucide-react';

const AppsTools = () => {
  const tools = [
    {
      name: 'Learning Analytics Dashboard',
      description: 'Real-time insights into student performance and learning patterns across all programs.',
      icon: BarChart3,
      type: 'Web Application',
      link: '#dashboard-link',
      downloadable: false,
      features: ['Student progress tracking', 'Teacher performance metrics', 'School-wise comparisons']
    },
    {
      name: 'Attendance Tracking System',
      description: 'Automated attendance management with smart notifications and reporting.',
      icon: Smartphone,
      type: 'Mobile App',
      link: '#attendance-app',
      downloadable: true,
      features: ['QR code scanning', 'Parent notifications', 'Monthly reports']
    },
    {
      name: 'Content Creation Toolkit',
      description: 'Suite of tools for teachers to create engaging educational content and assessments.',
      icon: Monitor,
      type: 'Desktop Application',
      link: '#content-toolkit',
      downloadable: true,
      features: ['Interactive quizzes', 'Video integration', 'Assessment builder']
    },
    {
      name: 'Report Templates Library',
      description: 'Standardized templates for various stakeholder reports and presentations.',
      icon: FileSpreadsheet,
      type: 'Template Collection',
      link: '#templates',
      downloadable: true,
      features: ['Excel templates', 'PowerPoint slides', 'PDF reports']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apps & Tools Developed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom-built solutions to streamline educational processes and enhance 
            the learning experience for students, teachers, and administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{tool.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium mt-1">
                      {tool.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={tool.link}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Preview
                  </a>
                  {tool.downloadable && (
                    <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can develop tailored applications and tools to meet your specific educational needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Custom Development
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsTools;