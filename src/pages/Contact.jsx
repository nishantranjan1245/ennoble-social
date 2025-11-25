import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Globe, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-18.jpg" 
              alt="Contact" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/88 via-emerald-800/90 to-teal-900/88"></div>
        </div>
        
        <div className="absolute inset-0 opacity-25">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-80 h-80 bg-teal-400 rounded-full filter blur-3xl"
              style={{ 
                left: `${i * 25}%`, 
                top: `${i % 2 ? '20%' : '60%'}` 
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -30, 0]
              }}
              transition={{ 
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`
              }}
              animate={{ 
                rotate: [0, 360],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Mail className="w-5 h-5 text-teal-200" />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Mail className="w-full h-full text-[#F4B400]" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl text-teal-100 max-w-3xl mx-auto mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We're here to connect, collaborate, and support. Whether you have questions, partnership ideas, 
              volunteer interest, or want to learn more about our programs, feel free to reach out.
            </motion.p>
            
            <motion.p 
              className="text-lg text-teal-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Ennoble Social Innovation Foundation welcomes individuals, organizations, and institutions 
              working toward human rights, equality, and social justice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-6 text-[#062737]">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you shortly.
              </p>
              
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#F4B400] text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-xl p-10">
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Registered Address</h3>
                        <p className="text-gray-700 leading-relaxed">
                          B/601, B Wing, Runwal Elina<br />
                          Cts No.687/1 to 6, Mehra Compound<br />
                          Kurla West, Mumbai<br />
                          Maharashtra – 400072
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                        <a
                          href="mailto:info@ennoblesocial.org"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                        >
                          info@ennoblesocial.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                        <a
                          href="tel:9876543210"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                        >
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Website</h3>
                        <a
                          href="https://ennoblesocial.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                        >
                          ennoblesocial.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect With Us */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Connect With Us</h3>
                  <p className="text-gray-700 mb-6">
                    Stay updated with our programs, campaigns, and research. Follow us on social platforms:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#facebook"
                      className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-700">Facebook</span>
                    </a>
                    <a
                      href="#instagram"
                      className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-gray-700">Instagram</span>
                    </a>
                    <a
                      href="#linkedin"
                      className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span className="font-semibold text-gray-700">LinkedIn</span>
                    </a>
                    <a
                      href="#youtube"
                      className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Youtube className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-gray-700">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 rounded-3xl shadow-xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Work With Us</h3>
                <p className="text-gray-200 mb-6">
                  Interested in volunteering, collaborating, or supporting our initiatives? 
                  Explore our programs and join our mission to promote equality, human rights, and social justice.
                </p>
                <Link
                  to={createPageUrl('GetInvolved')}
                  className="inline-flex items-center px-6 py-3 bg-[#F4B400] text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Involved
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}