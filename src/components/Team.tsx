import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Vikas Omar',
      role: 'Program Manager',
      bio: 'Leading educational transformation initiatives across Telangana with over 8 years of experience in education technology and program management.',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQE6CukRJ7hc9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1642054654043?e=1756944000&v=beta&t=ag4AYsg6tj8V8EDxYmPuzlHCW_UcOgdiLBJb0rZN66A',
      linkedin: 'https://www.linkedin.com/in/omarvikas/',
      email: 'vikas.omar@ei.study'
    },
    {
      name: 'Asish Nemalikanty',
      role: 'Associate Program Manager',
      bio: 'Leading educational transformation initiatives across Telangana with over 8 years of experience in education technology and program management.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGxETnKBfjLYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703739332916?e=1756944000&v=beta&t=Npd1R7sqE2KS8X7lZmbAa700unrzAJaCtzVLWkQNG_o',
      linkedin: 'https://www.linkedin.com/in/asish-nemalikanty-18254a240/',
      email: 'nemalikanty.asish@ei.study'
    },
    {
      name: 'Parthasaradhi M',
      role: 'Project Lead',
      bio: 'Coordinating multiple educational projects and ensuring seamless implementation across government schools in Telangana.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGtyc5GgiW8uQ/profile-displayphoto-shrink_800_800/B56ZcAqSVGHwAc-/0/1748062781749?e=1756944000&v=beta&t=TRUDP7ikZWgLHAkeZqYLoSz88_YePO3_rRQyVwxh_pA',
      linkedin: 'https://www.linkedin.com/in/parthasaradhi-m-7986b3118/',
      email: 'partha@ei.study'
    },
    {
      name: 'Anand Kumar',
      role: 'Operations & Support',
      bio: 'Managing day-to-day operations and providing technical support to ensure smooth functioning of all educational programs.',
      linkedin: '#anand-linkedin',
      email: 'anand.kumar@ei.study'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of education professionals working tirelessly to transform 
            learning experiences across Telangana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="aspect-w-3 aspect-h-3 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;