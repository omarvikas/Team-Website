import React from 'react';
import { BookOpen, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'ei.study', url: 'https://ei.study' },
    { name: 'Our Work', url: '#work' },
    { name: 'Projects', url: '#projects' },
    { name: 'Team', url: '#team' }
  ];

  const resources = [
    { name: 'Confluence Pages', url: '#confluence' },
    { name: 'Amazon Future Engineer', url: '#amazon-csr' },
    { name: 'Cognizant Steam4All', url: '#cognizant-csr' },
    { name: 'P&G Shiksha', url: '#pg-csr' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-bold text-xl">Educational Initiatives</div>
                <div className="text-gray-400 text-sm">Hyderabad Team</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming education in Telangana through innovative technology solutions, 
              adaptive learning platforms, and strategic partnerships.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">vikas.omar@ei.study</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    {link.url.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Ready to collaborate or need more information about our work in Telangana?
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Educational Initiatives Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://ei.study" className="hover:text-white transition-colors flex items-center">
                ei.study
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;