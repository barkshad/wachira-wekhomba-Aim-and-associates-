import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated professionals behind our success.
          </p>
        </div>
      </div>

      {/* Team Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {/* Profile Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full bg-white shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image Placeholder - In a real scenario, this would be a real photo */}
              <div className="md:w-2/5 bg-gray-200 min-h-[400px] relative">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Patrick Oduor" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                  <div>
                    <h3 className="text-white font-serif text-2xl font-bold">Patrick Oduor</h3>
                    <p className="text-accent font-medium">Advocate</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="hidden md:block mb-6">
                  <h3 className="text-primary font-serif text-3xl font-bold mb-2">Patrick Oduor</h3>
                  <p className="text-secondary font-medium text-lg uppercase tracking-wide">Advocate</p>
                  <div className="w-16 h-1 bg-accent mt-4"></div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Patrick Oduor is an advocate at Wachira Wekhomba Aim & Associates Advocates. He provides professional legal services and representation while maintaining strong ethical standards and dedication to client success. With a deep understanding of the Kenyan legal landscape, Patrick is committed to delivering strategic solutions that protect client interests.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 text-accent mr-3" />
                    <a href="mailto:info@wachirawekombaimadvocates.com" className="hover:text-primary transition-colors">
                      info@wachirawekombaimadvocates.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <span>+254 713 209 487</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Areas of Practice</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Civil Litigation', 'Corporate Law', 'Property Law', 'Legal Advisory'].map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
