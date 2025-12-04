import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pageTitles = {
  Home: 'Ennoble Social Innovation Foundation – Community Development',
  AboutUs: 'About Us - Ennoble Social Innovation Foundation',
  Programs: 'Programs - Ennoble Social Innovation Foundation',
  Research: 'Research & Innovation - Ennoble Social Innovation Foundation',
  GetInvolved: 'Get Involved - Ennoble Social Innovation Foundation',
  Updates: 'Updates - Ennoble Social Innovation Foundation',
  Contact: 'Contact Us - Ennoble Social Innovation Foundation',
  Donate: 'Donate - Ennoble Social Innovation Foundation',
  PrivacyPolicy: 'Privacy Policy - Ennoble Social Innovation Foundation',
  TermsOfUse: 'Terms of Use - Ennoble Social Innovation Foundation',
  Disclaimer: 'Disclaimer - Ennoble Social Innovation Foundation',
  RefundPolicy: 'Refund Policy - Ennoble Social Innovation Foundation',
  Sitemap: 'Sitemap - Ennoble Social Innovation Foundation',
};

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title
    document.title = pageTitles[currentPageName] || 'Ennoble Social Innovation Foundation';
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/image/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [currentPageName]);

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'About Us', path: 'AboutUs' },
    { name: 'Programs', path: 'Programs' },
    { name: 'Research & Innovation', path: 'Research' },
    { name: 'Get Involved', path: 'GetInvolved' },
    { name: 'Updates', path: 'Updates' },
    { name: 'Contact', path: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        :root {
          --primary: #1e40af;
          --primary-dark: #1e3a8a;
          --accent: #7c3aed;
          --accent-light: #a78bfa;
          --warm: #f59e0b;
          --warm-dark: #d97706;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center space-x-3 group">
              <img 
                src="/image/header--logo.png" 
                alt="Ennoble Social" 
                className="w-12 h-12 object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-200 via-emerald-100 to-cyan-200 bg-clip-text text-transparent">
                  ENNOBLE SOCIAL <br></br>INNOVATION FOUNDATION
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPageName === link.path
                      ? 'bg-white text-teal-800 shadow-md'
                      : 'text-white hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl('Donate')}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-teal-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-700 border-t border-white/20 shadow-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={createPageUrl(link.path)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPageName === link.path
                        ? 'bg-white text-teal-800'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Donate')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold text-center"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
                  <footer className="relative bg-gradient-to-b from-[#041c29] to-[#062737] text-white overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Section 1: Logo & Description */}
                              <div className="lg:col-span-1">
                                <div className="flex items-center space-x-3 mb-4">
                                  <Link to={createPageUrl('Home')} className="relative block">
                                    <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-md"></div>
                                    <img 
                                      src="/image/footer-logo.png" 
                                      alt="Ennoble Social" 
                                      className="relative w-12 h-12 object-contain"
                                    />
                                  </Link>
                                  <h3 className="text-xl font-bold bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">ENNOBLE SOCIAL <br></br>INNOVATION FOUNDATION</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                  We work to advance human rights, equality, and social justice through
                                  awareness, innovation, and community 
                                </p>
                                 
                              </div>

            {/* Section 2: Quick Links & Legal Support (side by side on mobile) */}
            <div className="grid grid-cols-2 gap-8 md:contents">
              {/* Quick Links */}
                                  <div>
                                    <h4 className="text-lg font-bold mb-4 text-white relative inline-block">
                                      Quick Links
                                      <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></span>
                                    </h4>
                                    <ul className="space-y-3 mt-6">
                                      {navLinks.filter(link => link.path !== 'Updates' && link.path !== 'Contact').map((link) => (
                                        <li key={link.path}>
                                          <Link
                                            to={createPageUrl(link.path)}
                                            className="text-gray-400 hover:text-teal-300 transition-all text-sm hover:translate-x-2 inline-flex items-center gap-2 group duration-300"
                                          >
                                            <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                            {link.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

              {/* Legal & Support */}
                                  <div>
                                    <h4 className="text-lg font-bold mb-4 text-white relative inline-block">
                                      Legal & Support
                                      <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></span>
                                    </h4>
                                    <ul className="space-y-3 mt-6">
                                      <li>
                                        <Link to={createPageUrl('PrivacyPolicy')} className="text-gray-400 hover:text-teal-300 transition-all text-sm hover:translate-x-2 inline-flex items-center gap-2 group duration-300">
                                          <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                          Privacy Policy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={createPageUrl('TermsOfUse')} className="text-gray-400 hover:text-teal-300 transition-all text-sm hover:translate-x-2 inline-flex items-center gap-2 group duration-300">
                                          <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                          Terms of Use
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={createPageUrl('Disclaimer')} className="text-gray-400 hover:text-teal-300 transition-all text-sm hover:translate-x-2 inline-flex items-center gap-2 group duration-300">
                                          <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                          Disclaimer
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={createPageUrl('RefundPolicy')} className="text-gray-400 hover:text-teal-300 transition-all text-sm hover:translate-x-2 inline-flex items-center gap-2 group duration-300">
                                          <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                          Refund / Donation Policy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={createPageUrl('Sitemap')} className="text-gray-400 hover:text-teal-300 transition-all text-sm hover:translate-x-2 inline-flex items-center gap-2 group duration-300">
                                          <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                          Sitemap
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
            </div>

            {/* Section 4: Address & Contact */}
                              <div>
                                <h4 className="text-lg font-bold mb-4 text-white relative inline-block">
                                  Contact Us
                                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></span>
                                </h4>
                                <div className="space-y-4 text-sm mt-6">
                                  <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-teal-400 text-xs">📍</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                      B/601, B Wing, Runwal Elina<br />
                                      Cts No.687/1 to 6, Mehra Compound<br />
                                      Kurla West, Mumbai<br />
                                      Maharashtra – 400072
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <span className="text-teal-400 text-xs">✉️</span>
                                    </div>
                                    <a
                                      href="mailto:info@ennoblesocial.org"
                                      className="text-teal-400 hover:text-teal-300 transition-colors"
                                    >
                                      info@ennoblesocial.org
                                    </a>
                                  </div>
                                </div>
                              </div>
          </div>

          {/* Bottom Copyright */}
                          <div className="border-t border-white/10 mt-12 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                              <p className="text-gray-500 text-sm">
                                © 2019–2025 Ennoble Social Innovation Foundation. All Rights Reserved.
                              </p>
                              <p className="text-gray-600 text-xs">
                                Building a just and equal society
                              </p>
                            </div>
                          </div>
        </div>
      </footer>
    </div>
  );
}