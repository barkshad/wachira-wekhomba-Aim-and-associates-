import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our legal team for professional assistance.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-sm shadow-sm"
              >
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Office Locations</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Nairobi Office</h4>
                      <p className="text-gray-600">CVS Plaza, 4th Floor<br/>Lenana Road, Nairobi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Nakuru Office</h4>
                      <p className="text-gray-600">West Side Mall, 3rd Floor<br/>Kenyatta Avenue, Nakuru</p>
                      <p className="text-gray-500 text-sm mt-1">P.O Box 808 – 20100, Nakuru</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-sm shadow-sm"
              >
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Phone Numbers</h4>
                      <p className="text-gray-600">+254 713 209 487</p>
                      <p className="text-gray-600">+254 708 156 186</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Email Addresses</h4>
                      <p className="text-gray-600 break-all text-sm">info@wachirawekombaimadvocates.com</p>
                      <p className="text-gray-600 break-all text-sm">wachirawekombaimadvocates@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Working Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-sm shadow-lg"
              >
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Request Legal Consultation</h3>
                <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+254..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Case Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please briefly describe your legal matter..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 px-8 rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d36.7915!3d-1.2841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b7d7f7c1b7%3A0x2b0b0b0b0b0b0b0b!2sLenana%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
