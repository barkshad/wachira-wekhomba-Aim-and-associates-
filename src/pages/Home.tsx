import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Users, FileText, Briefcase, Gavel, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import TiltCard from '../components/ui/TiltCard';
import StatCounter from '../components/ui/StatCounter';
import PageTransition from '../components/ui/PageTransition';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <PageTransition>
      <div className="overflow-hidden">
        <Helmet>
          <title>Wachira Wekhomba Aim & Associates Advocates | Law Firm Kenya</title>
          <meta name="description" content="Professional law firm providing legal representation, advisory services, and dispute resolution in Nairobi and Nakuru, Kenya." />
        </Helmet>

        {/* Hero Section with Parallax */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Law Firm Office" 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply"></div>
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block mb-6 px-5 py-2 border border-accent/50 rounded-full bg-black/30 backdrop-blur-md"
              >
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Premier Legal Counsel</span>
              </motion.div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl">
                Trusted Legal <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Representation</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed font-light opacity-90">
                Wachira Wekhomba Aim & Associates Advocates provides reliable legal representation, advisory services, and dispute resolution for individuals and businesses across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Link 
                  to="/consultation" 
                  className="group relative bg-accent text-primary font-bold py-4 px-10 rounded-sm overflow-hidden shadow-xl"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">Book Consultation</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="group bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-sm transition-all hover:bg-white hover:text-primary shadow-xl"
                >
                  Contact Our Advocates
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-white/70 text-xs tracking-widest uppercase mb-2">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-white relative z-20 -mt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-8">
              <StatCounter end={15} suffix="+" label="Years Experience" />
              <StatCounter end={500} suffix="+" label="Successful Cases" />
              <StatCounter end={120} suffix="+" label="Corporate Clients" />
              <StatCounter end={2} label="Cities Served" />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 transform translate-x-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center">
                  <span className="w-8 h-px bg-primary mr-3"></span> About The Firm
                </h4>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Wachira Wekhomba Aim <br/> & Associates Advocates
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Wachira Wekhomba Aim & Associates Advocates is a professional law firm committed to delivering reliable and strategic legal solutions. The firm provides high-quality legal representation and advisory services to individuals, businesses, and institutions.
                </p>
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  Our advocates combine legal expertise with practical insight to provide solutions tailored to each client's unique circumstances. We pride ourselves on our integrity, responsiveness, and unwavering dedication to our clients' success.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Experienced Attorneys",
                    "Client-Centric Approach",
                    "Integrity & Transparency",
                    "Strategic Legal Solutions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="bg-accent/10 p-2 rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <CheckCircle className="text-accent h-5 w-5 shrink-0 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors text-lg group border-b-2 border-primary/20 pb-1 hover:border-primary">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-full h-full border-2 border-accent/30 rounded-sm z-0 hidden md:block"></div>
                <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Meeting Room" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="absolute -bottom-12 -right-12 bg-white p-10 shadow-2xl rounded-sm z-20 hidden lg:block max-w-sm border-l-4 border-primary">
                  <p className="font-serif text-xl italic text-gray-800 leading-relaxed">"Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practice Areas Preview */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</h4>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-8">Practice Areas</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
                We offer a comprehensive range of legal services designed to meet the diverse needs of our clients.
              </p>
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TiltCard className="h-full bg-white p-10 rounded-sm shadow-lg hover:shadow-2xl border-t-4 border-transparent hover:border-accent group">
                    <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      {area.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-gray-600 mb-8 text-sm leading-relaxed">{area.desc}</p>
                    <Link to="/practice-areas" className="text-primary text-sm font-bold hover:text-secondary inline-flex items-center uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-20">
              <Link 
                to="/practice-areas" 
                className="inline-block border-2 border-primary text-primary font-bold py-4 px-12 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-wider text-sm hover:shadow-lg"
              >
                View All Practice Areas
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl"
          ></motion.div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">Need Professional <br/>Legal Advice?</h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                We are ready to listen to your case and provide the strategic legal guidance you need. Contact us today to schedule a consultation with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/consultation" 
                  className="bg-accent text-primary font-bold py-5 px-12 rounded-sm hover:bg-white transition-all shadow-xl transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  Request Consultation
                </Link>
                <a 
                  href="tel:+254713209487" 
                  className="bg-transparent border-2 border-white text-white font-bold py-5 px-12 rounded-sm hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1"
                >
                  Call: +254 713 209 487
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
