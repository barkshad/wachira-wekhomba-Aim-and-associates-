import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, History, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Office Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dedicated to excellence, integrity, and client success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Firm</h4>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wachira Wekhomba Aim & Associates Advocates
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Wachira Wekhomba Aim & Associates Advocates is a professional law firm committed to delivering high-quality legal services with integrity, professionalism, and dedication. Established with a vision to provide accessible and top-tier legal representation, we serve individuals, businesses, and institutions across Kenya.
                </p>
                <p className="mb-6">
                  The firm focuses on building strong client relationships while delivering practical legal solutions tailored to each client's needs. We understand that every legal matter is unique, and we approach each case with the attention to detail and strategic thinking it deserves.
                </p>
                <p>
                  With offices in Nairobi and Nakuru, we are strategically positioned to serve clients throughout the region, offering a wide range of legal services from corporate law and commercial transactions to civil litigation and family law.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-sm border-l-4 border-primary"
              >
                <div className="flex items-start mb-4">
                  <Target className="h-8 w-8 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide exceptional legal services that empower our clients to achieve their objectives while upholding the highest standards of ethics and professionalism.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 p-8 rounded-sm border-l-4 border-accent"
              >
                <div className="flex items-start mb-4">
                  <Award className="h-8 w-8 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the preferred legal partner in Kenya, known for our reliability, expertise, and unwavering commitment to justice and client satisfaction.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We uphold the highest ethical standards in all our dealings, ensuring honesty and transparency." },
              { title: "Excellence", desc: "We strive for perfection in our legal practice, delivering top-tier quality in every case." },
              { title: "Dedication", desc: "We are fully committed to our clients' causes, working tirelessly to achieve the best outcomes." },
              { title: "Client Focus", desc: "We prioritize our clients' needs, offering personalized solutions and responsive communication." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h3 className="font-serif text-xl font-bold text-accent mb-3">{value.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
