import React from 'react';
import { ExternalLink, Users, Award, BookOpen, Laptop } from 'lucide-react';

const KeyProjects = () => {
  const projects = [
    {
      name: 'Amazon Future Engineer Program',
      description: 'Comprehensive computer science education program reaching underserved communities.',
      icon: Laptop,
      stats: { students: '15,000+', schools: '75' },
      link: '#amazon-csr',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: "Cognizant's Steam4All",
      description: 'STEAM education initiative focusing on Science, Technology, Engineering, Arts, and Math.',
      icon: Award,
      stats: { students: '12,000+', schools: '60' },
      link: '#cognizant-csr',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'P&G Shiksha',
      description: 'Education program aimed at improving learning outcomes in government schools.',
      icon: BookOpen,
      stats: { students: '18,000+', schools: '90' },
      link: '#pg-csr',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Digi Vidya Shala',
      description: 'Digital classroom initiative funded by GlobalLogic to enhance digital literacy.',
      icon: Users,
      stats: { students: '8,000+', schools: '40' },
      link: '#globallogic-csr',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic partnerships enable large-scale educational transformation 
            across Telangana, reaching thousands of students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">{project.stats.students}</div>
                      <div className="text-sm text-gray-500">Students</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">{project.stats.schools}</div>
                      <div className="text-sm text-gray-500">Schools</div>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:underline"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyProjects;