import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Map, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Sitemap() {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: 'Home' },
        { name: 'About Us', path: 'AboutUs' },
        { name: 'Programs', path: 'Programs' },
        { name: 'Research & Innovation', path: 'Research' },
        { name: 'Get Involved', path: 'GetInvolved' },
        { name: 'Updates', path: 'Updates' },
        { name: 'Contact', path: 'Contact' },
        { name: 'Donate', path: 'Donate' }
      ]
    },
    {
      title: 'Our Programs',
      links: [
        { name: 'Human Rights Awareness Program', path: 'Programs' },
        { name: 'Equality & Anti-Discrimination Initiative', path: 'Programs' },
        { name: 'Social Justice Innovation Lab', path: 'Programs' },
        { name: 'Youth Rights & Leadership Initiative', path: 'Programs' },
        { name: 'Community Outreach & Support', path: 'Programs' }
      ]
    },
    {
      title: 'Research & Innovation',
      links: [
        { name: 'Human Rights Studies', path: 'Research' },
        { name: 'Equality & Inclusion Research', path: 'Research' },
        { name: 'Social Justice Innovation Projects', path: 'Research' },
        { name: 'Publications & Reports', path: 'Research' },
        { name: 'Policy Recommendations', path: 'Research' }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Volunteer With Us', path: 'GetInvolved' },
        { name: 'Partner With Us', path: 'GetInvolved' },
        { name: 'Support Our Campaigns', path: 'GetInvolved' },
        { name: 'Become a Community Ambassador', path: 'GetInvolved' },
        { name: 'Donation Options', path: 'Donate' }
      ]
    },
    {
      title: 'Legal & Support',
      links: [
        { name: 'Privacy Policy', path: 'PrivacyPolicy' },
        { name: 'Terms of Use', path: 'TermsOfUse' },
        { name: 'Disclaimer', path: 'Disclaimer' },
        { name: 'Refund / Donation Policy', path: 'RefundPolicy' },
        { name: 'Sitemap', path: 'Sitemap' }
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 2, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-24.jpg" 
              alt="Sitemap" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/90 via-teal-800/88 to-emerald-900/90"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          <motion.div animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.5, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl" />
          <motion.div animate={{ x: [0, -70, 0], y: [0, 60, 0], scale: [1, 1.4, 1] }} transition={{ duration: 13, repeat: Infinity, delay: 1 }} className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl" />
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: 'linear-gradient(to bottom, #14b8a6, transparent)' }}
              animate={{ y: [0, -150, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Map className="w-full h-full text-teal-300" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">Sitemap</h1>
            <p className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto">
              Navigate through all pages of Ennoble Social Innovation Foundation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={createPageUrl(link.path)}
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group text-lg"
                      >
                        <ArrowRight className="w-5 h-5 mr-3 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Need Help Finding Something?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you can't find what you're looking for, feel free to contact us. We're here to help!
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}