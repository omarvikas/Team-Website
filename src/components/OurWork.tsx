import React from 'react';
import { Brain, Users, BookOpen, Zap } from 'lucide-react';

const OurWork = () => {
  const workAreas = [
    {
      icon: Brain,
      title: 'Mindspark Implementation',
      description: 'Personal Adaptive learning platform providing tailord content for each student, covering Math, English, Telugu, and Computational Thinking.',
      details: ['AI-powered learning paths', 'Real-time progress tracking', 'Customized difficulty levels']
    },
    {
      icon: Users,
      title: 'Personalized Adaptive Learning (PAL)',
      description: 'Comprehensive rollout in Government schools across Telangana, supporting Grades 3-9.',
      details: ['Government school integration', 'Teacher training programs', 'Student assessment tools']
    },
    {
      icon: BookOpen,
      title: 'Capacity Building',
      description: 'Enhancing capcity of school teachers to use real-time data of students to use in their classrooms.',
      details: ['Data and Dashboard Access', 'State curriculum alignment', 'Interactive learning modules']
    },
    {
      icon: Zap,
      title: 'Impact Measurement',
      description: 'Continuous monitoring and evaluation of learning outcomes across Telangana region.',
      details: ['Data-driven insights', 'Performance analytics', 'Improvement recommendations']
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work in Telangana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're transforming education through innovations and strategic partnerships, 
            focusing on systemtic changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWork;