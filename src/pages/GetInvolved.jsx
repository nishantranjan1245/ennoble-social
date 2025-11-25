import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Handshake, Users, Heart, TrendingUp, Mail, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function GetInvolved() {
  const ways = [
    {
      icon: Handshake,
      title: '1. Volunteer With Us',
      description: 'Become a part of our mission by contributing your time, skills, and passion. Volunteers play a vital role in expanding our reach and empowering communities.',
      gradient: 'from-blue-500 to-cyan-600',
      benefits: [
        'Support human rights awareness workshops',
        'Help with community outreach programs',
        'Assist in research & documentation',
        'Participate in equality campaigns',
        'Engage in youth training and events'
      ]
    },
    {
      icon: Users,
      title: '2. Partner With Us (CSR / NGO Collaboration)',
      description: 'We collaborate with CSR teams, educational institutions, community organizations, social impact groups, and research institutions. Partnerships strengthen our ability to deliver large-scale impact.',
      gradient: 'from-purple-500 to-indigo-600',
      benefits: [
        'Rights education',
        'Innovation labs',
        'Digital safety programs',
        'Community empowerment',
        'Social justice campaigns'
      ]
    },
    {
      icon: Heart,
      title: '3. Support Our Campaigns',
      description: 'Your participation helps spread awareness and create change. You can join or promote our campaigns on human rights, equality, youth leadership, and digital rights.',
      gradient: 'from-rose-500 to-pink-600',
      benefits: [
        'Human rights advocacy',
        'Equality & anti-discrimination',
        'Youth leadership promotion',
        'Digital rights & safety',
        'Community empowerment initiatives'
      ]
    },
    {
      icon: TrendingUp,
      title: '5. Become a Community Ambassador',
      description: 'Help us share knowledge and promote justice in your local community. This role is open to youth, professionals, educators, and social impact enthusiasts.',
      gradient: 'from-amber-500 to-orange-600',
      benefits: [
        'Organize small awareness sessions',
        'Share official educational materials',
        'Help identify local issues',
        'Support equality-focused initiatives',
        'Connect communities with resources'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-2 gap-1">
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <img src="/image/image-15.jpg" alt="Volunteer" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
              <img src="/image/image-16.jpg" />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/88 via-emerald-900/90 to-teal-900/88"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"
              style={{ 
                left: `${(i % 3) * 40}%`, 
                top: `${Math.floor(i / 3) * 50}%` 
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`
              }}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Heart className="w-4 h-4 text-teal-200" />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              animate={{ 
                textShadow: ['0 0 30px rgba(255,255,255,0.4)', '0 0 50px rgba(255,255,255,0.6)', '0 0 30px rgba(255,255,255,0.4)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Get Involved
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Become part of the change. Together, we can create a more just and equal society.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Join Us in Creating Change
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join us in creating a society where every person enjoys dignity, equality, and justice. 
              Your support—whether through volunteering, partnerships, or advocacy—helps us reach more 
              communities and strengthen our impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...staggerContainer}
            className="space-y-12"
          >
            {ways.map((way, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:ml-auto'
                } lg:max-w-5xl`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}>
                  <div className={`bg-gradient-to-br ${way.gradient} p-10 flex items-center justify-center lg:col-span-2 ${
                    index % 2 === 0 ? '' : 'lg:col-start-4'
                  }`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <way.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{way.title}</h3>
                    </div>
                  </div>
                  <div className={`p-10 lg:col-span-3 ${
                    index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {way.description}
                    </p>
                    <ul className="space-y-3">
                      {way.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Your Involvement Matters */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Why Your Involvement Matters
            </h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Helps reduce inequality and discrimination',
              'Supports marginalized communities',
              'Strengthens youth leadership',
              'Expands rights awareness',
              'Encourages innovative solutions',
              'Builds a more just and inclusive society'
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-3"
              >
                <Heart className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <p className="text-xl text-gray-700 font-semibold">
              Your participation fuels real, lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Mail className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-200 mb-8">
              We invite you to join us in building a world rooted in justice, equality, and human dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center px-8 py-4 bg-[#F4B400] text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl('Donate')}
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-white text-teal-900 rounded-full font-semibold hover:bg-white/10 hover:text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Support Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}