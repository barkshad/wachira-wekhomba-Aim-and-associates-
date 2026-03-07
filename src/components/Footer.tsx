import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Wachira Wekhomba Aim
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
              & Associates Advocates
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing reliable legal representation and professional legal services with integrity and dedication across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-400 hover:text-white transition-colors text-sm">Practice Areas</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors text-sm">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-accent mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  CVS Plaza, 4th Floor, Lenana Road, Nairobi<br />
                  West Side Mall, 3rd Floor, Kenyatta Avenue, Nakuru
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">
                  +254 713 209 487<br />
                  +254 708 156 186
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 shrink-0" />
                <span className="text-gray-400 text-sm break-all">
                  info@wachirawekombaimadvocates.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-accent mb-6">Office Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Wachira Wekhomba Aim & Associates Advocates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
