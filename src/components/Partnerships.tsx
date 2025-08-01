import React from 'react';
import { ExternalLink, Users, Award, BookOpen, Building } from 'lucide-react';

const Partnerships = () => {
  const partnerships = [
    {
      name: 'TGTWREIS',
      fullName: 'Telangana Tribal Welfare Residential Educational Institutions Society',
      description: 'Comprehensive educational support for tribal students across residential institutions in Telangana.',
      icon: Users,
      website: 'https://tgtwreis.in',
      stats: { institutions: '268', students: '45,000+' },
      collaboration: 'Digital learning platforms and teacher training programs'
    },
    {
      name: 'TSWREIS',
      fullName: 'Telangana Social Welfare Residential Educational Institutions Society',
      description: 'Empowering students from socially disadvantaged backgrounds through quality education.',
      icon: Award,
      website: 'https://tswreis.in',
      stats: { institutions: '350+', students: '60,000+' },
      collaboration: 'Adaptive learning systems and curriculum enhancement'
    },
    {
      name: 'MJPTBCWREIS',
      fullName: 'Mahatma Jyotiba Phule Telangana Backward Classes Welfare Residential Educational Institutions Society',
      description: 'Supporting backward class students with comprehensive educational opportunities.',
      icon: BookOpen,
      website: 'https://mjptbcwreis.cgg.gov.in',
      stats: { institutions: '200+', students: '35,000+' },
      collaboration: 'Technology integration and learning outcome improvement'
    },
    {
      name: 'Department of Tribal Welfare',
      fullName: 'Government of Telangana - Department of Tribal Welfare',
      description: 'Policy-level collaboration for tribal education development and implementation.',
      icon: Building,
      website: 'https://tribal.telangana.gov.in',
      stats: { districts: '33', beneficiaries: '75,000+' },
      collaboration: 'Strategic planning and program implementation'
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Government Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with key government institutions to ensure inclusive and 
            equitable education across Telangana state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => {
            const IconComponent = partnership.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{partnership.name}</h3>
                      <p className="text-sm text-gray-500 leading-tight">{partnership.fullName}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partnership.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {partnership.stats.institutions || partnership.stats.districts}
                      </div>
                      <div className="text-xs text-gray-500">
                        {partnership.stats.institutions ? 'Institutions' : 'Districts'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {partnership.stats.students || partnership.stats.beneficiaries}
                      </div>
                      <div className="text-xs text-gray-500">
                        {partnership.stats.students ? 'Students' : 'Beneficiaries'}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Collaboration:</h4>
                    <p className="text-sm text-gray-600">{partnership.collaboration}</p>
                  </div>

                  <a
                    href={partnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:underline"
                  >
                    Visit Official Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Partnership?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We welcome collaborations with government institutions, NGOs, and private organizations 
              committed to improving education outcomes in Telangana.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;