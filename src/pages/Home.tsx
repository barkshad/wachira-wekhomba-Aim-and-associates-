import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Users, FileText, Briefcase, Gavel, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Law Firm Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-4 px-3 py-1 border border-accent/50 rounded-full bg-black/20 backdrop-blur-sm">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">Excellence in Law</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Trusted Legal Expertise <br/>
              <span className="text-accent">in Kenya</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Providing reliable legal representation and professional legal services with integrity and dedication. We build strong client relationships while delivering practical legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent-light text-primary font-bold py-4 px-8 rounded-sm transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link 
                to="/practice-areas" 
                className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-4 px-8 rounded-sm transition-colors text-center"
              >
                Our Practice Areas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Who We Are</h4>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wachira Wekhomba Aim & Associates Advocates
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a professional law firm committed to delivering high-quality legal services with integrity, professionalism, and dedication. The firm provides legal representation, advisory services, and dispute resolution for individuals, businesses, and institutions across Kenya.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The firm focuses on building strong client relationships while delivering practical legal solutions tailored to each client's needs. Our approach is client-centric, ensuring that we understand your unique challenges and objectives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Experienced Attorneys",
                  "Client-Centric Approach",
                  "Integrity & Transparency",
                  "Strategic Legal Solutions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-accent h-5 w-5" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-sm z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Meeting Room" 
                className="relative z-10 w-full h-auto rounded-sm shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h4>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Practice Areas</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Corporate Law", 
                icon: <Briefcase className="h-8 w-8" />, 
                desc: "Comprehensive legal solutions for businesses, including incorporation, compliance, and governance." 
              },
              { 
                title: "Civil Litigation", 
                icon: <Gavel className="h-8 w-8" />, 
                desc: "Expert representation in civil disputes, ensuring your rights and interests are vigorously defended." 
              },
              { 
                title: "Property & Land Law", 
                icon: <MapPin className="h-8 w-8" />, 
                desc: "Guidance on real estate transactions, land transfers, leases, and property dispute resolution." 
              },
              { 
                title: "Family Law", 
                icon: <Users className="h-8 w-8" />, 
                desc: "Compassionate legal support for divorce, custody, succession, and other family-related matters." 
              },
              { 
                title: "Commercial Law", 
                icon: <Scale className="h-8 w-8" />, 
                desc: "Strategic advice on commercial contracts, trade regulations, and business operations." 
              },
              { 
                title: "Legal Advisory", 
                icon: <Shield className="h-8 w-8" />, 
                desc: "Professional legal opinions and advisory services to help you make informed decisions." 
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-b-4 border-transparent hover:border-accent group"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {area.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{area.desc}</p>
                <Link to="/practice-areas" className="text-primary text-sm font-bold hover:text-secondary inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/practice-areas" 
              className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-sm hover:bg-primary hover:text-white transition-colors"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Need Professional Legal Advice?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            We are ready to listen to your case and provide the strategic legal guidance you need. Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-accent text-primary font-bold py-4 px-10 rounded-sm hover:bg-white transition-colors shadow-lg"
            >
              Request Consultation
            </Link>
            <a 
              href="tel:+254713209487" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-primary transition-colors"
            >
              Call: +254 713 209 487
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
