import React from 'react';
import { FileText, BarChart3, Users, ExternalLink, Database, TrendingUp } from 'lucide-react';

const InternalReference = () => {
  const resources = [
    {
      title: 'Student-Level Data Access',
      description: 'Request detailed student performance data, progress reports, and analytics.',
      icon: Database,
      link: '#confluence-data',
      type: 'Data Request'
    },
    {
      title: 'Project Implementation Status',
      description: 'Track real-time progress of all ongoing projects and initiatives.',
      icon: TrendingUp,
      link: '#confluence-status',
      type: 'Status Tracking'
    },
    {
      title: 'Innovation Documentation',
      description: 'Access detailed documentation of all our innovations and best practices.',
      icon: FileText,
      link: '#confluence-innovations',
      type: 'Documentation'
    },
    {
      title: 'Performance Dashboards',
      description: 'View comprehensive dashboards with key metrics and KPIs.',
      icon: BarChart3,
      link: '#confluence-dashboards',
      type: 'Analytics'
    }
  ];

  const quickActions = [
    'Request monthly performance reports',
    'Access school-wise implementation data',
    'Download teacher training materials',
    'View student engagement metrics',
    'Get project timeline updates'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need Data or Project Updates?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Internal resources for EI teams and leadership to access data, track progress, 
            and learn from our innovations in Telangana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:underline"
                    >
                      Access Resource
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-7 h-7 text-indigo-600 mr-3" />
                Quick Actions
              </h3>
              <ul className="space-y-3">
                {quickActions.map((action, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Contact for Support</h4>
              <p className="text-gray-600 mb-4">
                For specific data requests or technical support, reach out to our team lead:
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Asish Kumar</div>
                  <div className="text-sm text-gray-600">Telangana Lead</div>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalReference;